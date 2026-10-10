# Copilot Instructions — Linguasprouts Client

These are repository-wide instructions for GitHub Copilot (and any agent reading this file) when
working in this codebase. Read this before making structural, layer, or UI changes. It complements
[AGENTS.md](/AGENTS.md) and [CLAUDE.md](/CLAUDE.md) (Next.js version notice) — read all three.

## 1. Stack snapshot

- **Framework**: Next.js 16 App Router (`/app` at repo root — see §2 for how this maps onto FSD).
- **UI**: MUI v7 (`@mui/material`, `@mui/icons-material`, `@mui/x-data-grid`) + Tailwind v4 utility
  classes + `motion` for animation. Custom components live in [src/shared/ui](/src/shared/ui).
- **Data/state**: TanStack Query (`@tanstack/react-query`) on the client, Next.js Server Actions
  (`"use server"`) for mutations/fetches, `axios` as the HTTP client inside server actions.
- **Fonts/theme**: Plus Jakarta Sans (body/UI), Playpen Sans + DM Serif Display (display/accent),
  themes defined in [src/_app/styles/theme.ts](/src/_app/styles/theme.ts).

## 2. Architecture: Feature-Sliced Design (FSD)

This project follows **[Feature-Sliced Design](https://feature-sliced.design/)**. If you are not
certain a change respects FSD, consult the official docs rather than guessing — do not invent new
layer semantics.

### 2.1 Layers, in strict dependency order (top may import from any layer below it, never the reverse)

| # | FSD layer | Folder in this repo | Status |
|---|-----------|---------------------|--------|
| 1 | `app` | [src/_app](/src/_app) (providers, global styles, theme) | present |
| 2 | `pages` | [src/_pages](/src/_pages) (`marketing/*`, `admin/*`) | present |
| 3 | `widgets` | — | missing, see §2.4 |
| 4 | `features` | [src/features](/src/features) (`authentication`, `generate-payments-qrcode`, `registrations`) | present |
| 5 | `entities` | [src/entities](/src/entities) (`afterSchoolReg`, `dayCampReg`, `frenchImmigSprintReg`) | present |
| 6 | `shared` | [src/shared](/src/shared) (`ui`, `lib`, `model`) | present |

The repo prefixes the Next.js–reserved layer names with an underscore (`_app`, `_pages`) purely to
avoid filesystem collisions with the real Next.js `/app` router directory at the repo root. This is
a **naming accommodation, not a semantic deviation** — treat `src/_app` and `src/_pages` exactly as
FSD's `app` and `pages` layers. Do not rename them back to `app`/`pages` (that would collide with
Next.js routing), and do not treat the underscore as meaning "private/unused."

### 2.2 How Next.js routing composes the `pages`/`app` layers

Route files under the real `/app` directory (e.g. [app/(marketing)/page.tsx](</app/(marketing)/page.tsx>),
[app/admin/layout.tsx](/app/admin/layout.tsx)) should stay **thin composition shells**: they wire up
route-level concerns (metadata, per-section `ThemeProvider`, layout nesting) and render a page
composed from [src/_pages](/src/_pages). Business UI and logic do not belong in `/app` route files —
build it in the proper FSD layer and import it in.

### 2.3 Segments

Canonical FSD segments are `ui`, `model`, `api`, `lib`, `config`. This repo additionally uses
`actions` (Next.js server actions — functionally the FSD `api` segment, i.e. backend interaction)
and `hooks` (TanStack Query hooks wrapping those actions — functionally part of `model`). This is an
accepted, consistent extension for this codebase; keep using `actions/` + `hooks/` in entities and
features rather than mixing in `api/`, so the pattern stays uniform across slices.

Every slice (`entities/<slice>`, `features/<slice>`) **must** export its public surface through a
single `index.ts` barrel, as the [frenchImmigSprintReg](/src/entities/frenchImmigSprintReg/index.ts)
entity does. Other layers/slices must import **only** from that barrel
(`@/src/entities/frenchImmigSprintReg`), never reach into `.../actions/...` or `.../model/...`
directly from outside the slice. Deep relative imports (`../actions/...`, `../model/...`) are fine
*within* the same slice only.

### 2.4 Widgets layer — currently missing, use judiciously

This repo has no `widgets` layer yet. Composite, self-contained, page-agnostic UI blocks that
combine several entities/features (e.g. an admin dashboard metrics panel, a data table with its own
fetching + filters) belong in `widgets/<slice>`, **not** in `shared/ui`. `shared/ui` is for
business-agnostic design-system primitives only (see §3). If a task's scope touches a component like
[AdminMetrics](/src/shared/ui/admin/AdminMetrics/AdminMetrics.tsx) or
[AdminTable.tsx](/src/shared/ui/admin/AdminTable.tsx) — which are admin-specific composite blocks,
not generic UI — and the task is already about restructuring that area, move it to a new
`src/widgets/admin-*` slice. Don't do this opportunistically outside the task's scope (see §7).

## 3. Shared layer — keep it business-agnostic

`shared` is the lowest layer and must stay free of domain/business concepts. It should only contain
things that would make sense in a completely different product:

- **`shared/ui`**: generic design-system components built on MUI primitives (buttons, layout
  helpers, skeletons, a logo/footer only if truly cross-cutting). No entity/feature-specific copy,
  data types, or fetching logic here.
- **`shared/lib`**: infra utilities — the `axios` instance, a generic `ResponsePayload<T>` type, the
  `resolveServerAction` helper, the [getErrorMessage](/src/shared/lib/getErrorMessage.ts) helper,
  generic constants. No business models.
- **`shared/model`**: only generic cross-cutting types.

**Known violation to be aware of**: [src/shared/lib/api.ts](/src/shared/lib/api.ts) currently holds
domain-specific types and fetchers (`RegistrationPayload`, `CheckoutResponse`, `InteracPayment`,
`createCheckoutSession`, `verifyPayment`, …) that belong to the `registrations`/payment entities or
features, not `shared`. Treat this as legacy drift:
  - If a task touches registration/payment/checkout code, move the relevant pieces out of
    `shared/lib/api.ts` into the owning `entities/*` or `features/registrations` slice (with a proper
    `index.ts` barrel), and leave a thin re-export only if something external still depends on the
    old path during migration.
  - Do **not** add new domain types/fetchers to `shared/lib/api.ts` — put new business logic in the
    correct entity/feature from the start.
  - If a task is unrelated to this file, don't refactor it opportunistically — just flag it as a
    recommendation (see §7).

## 4. Entities & Features

- **`entities/<name>`** (e.g. `frenchImmigSprintReg`) model a single business object: its shape
  (`model/`), its CRUD/server actions (`actions/`), and hooks wrapping those actions (`hooks/`). Entity
  UI, if any, should be the smallest unit (a card, a status badge) — not full forms or pages.
- **`features/<name>`** (e.g. `registrations`) implement a complete user-facing action, composed from
  one or more entities. UI for multi-step forms, success modals, terms copy, etc. belongs here (see
  [features/registrations/ui](/src/features/registrations/ui)).
- A slice on one layer must **never** import another slice on the *same* layer (e.g. one entity must
  not import another entity directly) — if two entities need to be combined, that composition belongs
  in a feature, widget, or page.

## 5. UI & component guidelines (MUI + custom `shared/ui`)

This is a **production** codebase — treat every component as something that ships, not a prototype.

- **Compose, don't duplicate.** Build new UI from existing `shared/ui` primitives
  ([PrimaryButton.tsx](/src/shared/ui/PrimaryButton.tsx), `StyledTabs`, etc.) before reaching for raw
  MUI components inline. If a new reusable pattern emerges, promote it into `shared/ui` (or the
  relevant entity/feature/widget `ui/` segment if it carries business meaning) instead of copy-pasting
  `sx` blocks across files.
- **Theme tokens over magic values.** All color, spacing, radius, and typography decisions should
  flow from [theme.ts](/src/_app/styles/theme.ts) (`theme.palette`, `theme.typography`, MUI's spacing
  scale) — never hardcode hex colors or pixel values in component `sx`/styled blocks when a token
  exists. Example to be mindful of:
  `HeroButton` in [PrimaryButton.tsx](/src/shared/ui/PrimaryButton.tsx) hardcodes `color: "#0E3D05"` —
  if you touch this component, prefer adding/using a palette token instead of another literal hex.
- **Typed, not `any`.** Avoid `any` in new/edited code (several existing types in
  [shared/lib/api.ts](/src/shared/lib/api.ts) and [shared/lib/types.ts](/src/shared/lib/types.ts) use
  `any` — don't propagate that pattern into new code; tighten types you touch when in scope).
  In server actions, write `catch (error)` (not `catch (error: any)`) and build the failure message
  with [getErrorMessage](/src/shared/lib/getErrorMessage.ts):
  `return apiResponse(false, getErrorMessage(error), null);`. Existing actions that still use
  `error: any` are legacy — migrate them only when they're in scope.
- **`"use client"` discipline.** Keep server actions (`actions/*.ts`) server-only (`"use server"`),
  keep hooks/components that need interactivity `"use client"`, and avoid turning a whole page client-
  side just to use one interactive child — push `"use client"` as far down the tree as practical.
- **Accessibility is non-negotiable**: semantic HTML, proper label/`aria-*` association for all form
  controls, visible focus states, sufficient color contrast (check against the theme's green/blue
  palette, especially light tints like `primary.light`), and keyboard operability for anything
  clickable.

## 6. Modern, minimalistic UI takes priority

When a task touches UI, modern-minimalist visual quality **outranks other stylistic preferences**
(but never overrides functional correctness or the FSD rules above). Apply:

- **Whitespace & hierarchy**: generous spacing, one clear primary action per view, restrained use of
  borders/shadows — let spacing and type scale create structure, not boxes and dividers.
- **Restrained palette**: lean on the existing theme palette (primary green, secondary blue, grey
  scale, white) rather than introducing new colors; use color sparingly for emphasis/state, not
  decoration.
- **Consistent system**: reuse the existing radius (`200px` pill buttons), elevation (`disableElevation`
  pattern already used), and type scale from the theme — don't introduce a one-off style per component.
- **Purposeful motion**: use `motion` for subtle entrance/feedback animation only; nothing gratuitous,
  respect `prefers-reduced-motion`.
- **Responsive-first**: design for mobile breakpoints first, verify at MUI's `sm`/`md`/`lg` breakpoints.
- **Copywriting**: microcopy should be concise, warm, and benefit-led — active voice, no jargon, no
  filler ("Welcome to our amazing..."), sentence case for UI labels, and a clear single call to action
  per section (e.g. "Reserve your spot" over "Submit"). Error/empty/loading states need real, helpful
  copy — never leave a raw technical message or a bare spinner with no context.

## 7. Scope policy for structural corrections

Follow this policy exactly when you notice an FSD or UI issue:

1. **In-scope corrections**: if a prompt's task touches a file/slice that is misplaced relative to FSD
   (wrong layer, missing public API, business logic in `shared`, deep cross-slice import, etc.), fix
   it as part of that task — move it to the correct layer/slice, add/update the `index.ts` barrel, and
   update importers.
2. **Out-of-scope issues**: if you notice a structural problem unrelated to the current task, do not
   refactor it silently. Call it out explicitly as a recommendation (what's wrong, why, and the FSD-
   correct target location) and let the user decide whether to act on it now.
3. **Higher-level architecture recommendations** (e.g. introducing a `widgets` layer, consolidating
   `shared/lib/api.ts`) are welcome and encouraged as explicit, clearly-labeled suggestions — but do
   not execute a repo-wide refactor without it being the scoped task.

### Known deviations to flag opportunistically (not to silently fix)

- [src/shared/lib/api.ts](/src/shared/lib/api.ts): domain types/fetchers living in `shared` (see §3).
- [src/shared/ui/admin](/src/shared/ui/admin): `AdminMetrics`, `AdminTable*` are composite,
  admin-domain widgets, not generic design-system primitives — candidates for a future
  `widgets/admin-*` slice once that layer is introduced.
- No `widgets` layer exists yet — introduce it only when a task's scope calls for a composite,
  reusable, cross-entity UI block.
- Scattered hardcoded hex values in `sx` props instead of theme palette tokens (e.g. `HeroButton`).

## 8. Before opening a change

- Confirm imports cross layers downward only, and cross-slice imports go through each slice's
  `index.ts` public API.
- Confirm new business logic/types aren't added to `shared`.
- Confirm new reusable UI is built from (or promoted into) `shared/ui` using theme tokens, not
  one-off inline styles.
- Run `npm run lint` for anything touching `src/` or `app/`.
