"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import style from "./page.module.css";
import { createCheckoutSession } from "@/lib/api";
import Image from "next/image";
import AppBar from "@/components/ui/AppBar/AppBar";
import { useInteracPayments } from "@/hooks/useInteracPayments";
import { useRouter } from "next/navigation";

const STEPS = ["Parent Info", "Child Info", "Payments"] as const;
const CAMP_OPTIONS = ["French Class", "Spanish Class"] as const;

// Map UI camp names to backend enum values
const CAMP_NAME_MAP: Record<string, "french" | "spanish"> = {
  "French Class": "french",
  "Spanish Class": "spanish",
};

export default function RegisterPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const createPayment = useInteracPayments();

  // Parent form
  const [parentForm, setParentForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  // Children form
  type ChildData = {
    firstName: string;
    lastName: string;
    age: string;
    allergies: string;
    camps: string[];
    saved: boolean;
  };
  const [children, setChildren] = useState<ChildData[]>([
    {
      firstName: "",
      lastName: "",
      age: "",
      allergies: "",
      camps: [],
      saved: false,
    },
  ]);

  function handleParentChange(e: React.ChangeEvent<HTMLInputElement>) {
    setParentForm({ ...parentForm, [e.target.name]: e.target.value });
  }

  function handleChildChange(
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) {
    const updated = [...children];
    updated[index] = { ...updated[index], [e.target.name]: e.target.value };
    setChildren(updated);
  }

  function toggleCamp(childIndex: number, camp: string) {
    const updated = [...children];
    const camps = updated[childIndex].camps;
    if (camps.includes(camp)) {
      updated[childIndex] = {
        ...updated[childIndex],
        camps: camps.filter((c) => c !== camp),
      };
    } else {
      updated[childIndex] = { ...updated[childIndex], camps: [...camps, camp] };
    }
    setChildren(updated);
  }

  function saveChild(index: number) {
    const updated = [...children];
    updated[index] = { ...updated[index], saved: true };
    setChildren(updated);
  }

  function editChild(index: number) {
    const updated = [...children];
    updated[index] = { ...updated[index], saved: false };
    setChildren(updated);
  }

  function addChild() {
    const updated = children.map((c) =>
      c.firstName ? { ...c, saved: true } : c,
    );
    setChildren([
      ...updated,
      {
        firstName: "",
        lastName: "",
        age: "",
        allergies: "",
        camps: [],
        saved: false,
      },
    ]);
  }

  function handleNext() {
    if (activeStep < STEPS.length - 1) {
      setActiveStep(activeStep + 1);
    }
  }

  async function handlePay() {
    setError(null);
    setSubmitting(true);

    try {
      // Build the payload matching backend expectations
      const validChildren = children.filter(
        (c) => c.firstName && c.camps.length > 0,
      );

      if (!parentForm.firstName || !parentForm.email) {
        throw new Error("Please fill in parent first name and email.");
      }
      if (validChildren.length === 0) {
        throw new Error("Please add at least one child with a class selected.");
      }

      const payload = {
        parent: {
          fullName: `${parentForm.firstName} ${parentForm.lastName}`.trim(),
          email: parentForm.email,
          phone: parentForm.phone,
        },
        children: validChildren.map((c) => ({
          fullName: `${c.firstName} ${c.lastName}`.trim(),
          age: parseInt(c.age, 10) || 0,
          allergies: c.allergies || null,
          classNames: c.camps
            .map((camp) => CAMP_NAME_MAP[camp])
            .filter(Boolean),
        })),
      };

      await createPayment.mutateAsync(payload, {
        onSuccess() {
          router.push("/success");
        },
        onError() {
          setError("Something went wrong. Please try again.");
        },
      });

      setSubmitting(false);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
      setSubmitting(false);
    }
  }

  return (
    <div className={style.page}>
      <AppBar />

      {/* Main */}
      <main className={style.main}>
        <div className={style.card}>
          {/* Sidebar */}
          <aside className={style.sidebar}>
            <h1 className={style.campTitle}>
              French/Spanish Summer
              <br />
              Camp 2026
            </h1>
            <p className={style.campSubtitle}>Complete your registration</p>
            <hr className={style.divider} />
            <nav className={style.steps}>
              {STEPS.map((label, i) => (
                <div
                  key={label}
                  className={`${style.step} ${i === activeStep ? style.stepActive : ""}`}
                  onClick={() => setActiveStep(i)}
                >
                  {label}
                </div>
              ))}
            </nav>
          </aside>

          {/* Form content */}
          <section className={style.content}>
            <h2 className={style.sectionTitle}>{STEPS[activeStep]}</h2>
            <hr className={style.sectionDivider} />

            {activeStep === 0 && (
              <ParentInfoForm form={parentForm} onChange={handleParentChange} />
            )}

            {activeStep === 1 && (
              <ChildInfoForm
                children={children}
                onChildChange={handleChildChange}
                onToggleCamp={toggleCamp}
                onAddChild={addChild}
                onSaveChild={saveChild}
                onEditChild={editChild}
              />
            )}

            {activeStep === 2 && (
              <PaymentsSection
                children={children}
                onPay={handlePay}
                submitting={submitting}
                error={error}
              />
            )}

            {activeStep < 2 && (
              <div className={style.actions}>
                <button
                  type="button"
                  className={style.nextBtn}
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            )}
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className={style.footer}>
        <p className={style.footerCopy}>&copy; 2026 Linguasprouts Academy</p>
        <nav className={style.footerNav}>
          <Link href="/register" className={style.footerLink}>
            Register
          </Link>
          <Link href="/" className={style.footerLink}>
            Home
          </Link>
        </nav>
      </footer>
    </div>
  );
}

/* ── Parent Info Form ──────────────────────────────── */

function ParentInfoForm({
  form,
  onChange,
}: {
  form: { firstName: string; lastName: string; email: string; phone: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className={style.formGrid}>
      <div className={style.field}>
        <input
          className={style.input}
          type="text"
          name="firstName"
          placeholder="First name"
          value={form.firstName}
          onChange={onChange}
        />
      </div>
      <div className={style.field}>
        <input
          className={style.input}
          type="text"
          name="lastName"
          placeholder="Last name"
          value={form.lastName}
          onChange={onChange}
        />
      </div>
      <div className={style.field}>
        <input
          className={style.input}
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={onChange}
        />
      </div>
      <div className={style.field}>
        <input
          className={style.input}
          type="tel"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

/* ── Child Info Form ───────────────────────────────── */

function ChildInfoForm({
  children,
  onChildChange,
  onToggleCamp,
  onAddChild,
  onSaveChild,
  onEditChild,
}: {
  children: {
    firstName: string;
    lastName: string;
    age: string;
    allergies: string;
    camps: string[];
    saved: boolean;
  }[];
  onChildChange: (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  onToggleCamp: (childIndex: number, camp: string) => void;
  onAddChild: () => void;
  onSaveChild: (index: number) => void;
  onEditChild: (index: number) => void;
}) {
  return (
    <>
      {children.map((child, i) =>
        child.saved ? (
          <ChildSummaryCard
            key={i}
            child={child}
            onEdit={() => onEditChild(i)}
          />
        ) : (
          <div key={i} className={style.childFormCard}>
            <div className={style.formGrid}>
              <div className={style.field}>
                <input
                  className={style.input}
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={child.firstName}
                  onChange={(e) => onChildChange(i, e)}
                />
              </div>
              <div className={style.field}>
                <input
                  className={style.input}
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={child.lastName}
                  onChange={(e) => onChildChange(i, e)}
                />
              </div>
              <div className={style.field}>
                <input
                  className={style.input}
                  type="text"
                  name="age"
                  placeholder="Age"
                  value={child.age}
                  onChange={(e) => onChildChange(i, e)}
                />
              </div>
              <CampSelect
                selected={child.camps}
                onToggle={(camp) => onToggleCamp(i, camp)}
              />
              <div className={style.field}>
                <input
                  className={style.input}
                  type="text"
                  name="allergies"
                  placeholder="Allergies if any"
                  value={child.allergies}
                  onChange={(e) => onChildChange(i, e)}
                />
              </div>
            </div>
          </div>
        ),
      )}
      <button type="button" className={style.addChildBtn} onClick={onAddChild}>
        <span className={style.addChildPlus}>+</span>
        Add Another Child
      </button>
    </>
  );
}

/* ── Child Summary Card ────────────────────────────── */

function ChildSummaryCard({
  child,
  onEdit,
}: {
  child: {
    firstName: string;
    lastName: string;
    age: string;
    allergies: string;
    camps: string[];
  };
  onEdit: () => void;
}) {
  const details = [
    child.age ? `${child.age} years` : "",
    child.camps.length > 0
      ? child.camps.map((c) => c.replace(" Class", "")).join(", ")
      : "",
    child.allergies || "",
  ].filter(Boolean);

  return (
    <div className={style.childCard}>
      <div className={style.childCardInfo}>
        <p className={style.childCardName}>
          {child.firstName} {child.lastName}
        </p>
        <p className={style.childCardDetails}>{details.join("  ·  ")}</p>
      </div>
      <button type="button" className={style.editBtn} onClick={onEdit}>
        <span className={style.editIcon}>✎</span>
        Edit
      </button>
    </div>
  );
}

/* ── Camp Multi-Select ─────────────────────────────── */

function CampSelect({
  selected,
  onToggle,
}: {
  selected: string[];
  onToggle: (camp: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const displayValue =
    selected.length > 0
      ? selected.map((s) => s.replace(" Class", "")).join(", ")
      : "";

  return (
    <div className={style.selectField} ref={ref}>
      {selected.length > 0 && (
        <span className={style.selectLabel}>Summer Class Camp</span>
      )}
      <button
        type="button"
        className={style.selectTrigger}
        onClick={() => setOpen(!open)}
      >
        {displayValue || "Summer Class Camp"}
      </button>
      {open && (
        <div className={style.dropdown}>
          {CAMP_OPTIONS.map((camp) => {
            const checked = selected.includes(camp);
            return (
              <div
                key={camp}
                className={style.dropdownItem}
                onClick={() => onToggle(camp)}
              >
                <div
                  className={`${style.checkbox} ${checked ? style.checkboxChecked : ""}`}
                >
                  {checked && <span className={style.checkmark}>✓</span>}
                </div>
                <span className={style.dropdownLabel}>{camp}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ── Payments Section ──────────────────────────────── */

const PRICE_PER_CHILD = 249;

function PaymentsSection({
  children,
  onPay,
  submitting,
  error,
}: {
  children: { firstName: string; camps: string[] }[];
  onPay: () => void;
  submitting: boolean;
  error: string | null;
}) {
  // Group children by camp
  const campGroups: Record<string, string[]> = {};
  for (const child of children) {
    for (const camp of child.camps) {
      const label = camp.replace("Class", "Summer Class");
      if (!campGroups[label]) campGroups[label] = [];
      campGroups[label].push(child.firstName);
    }
  }

  const entries = Object.entries(campGroups);
  const totalCost = entries.reduce(
    (sum, [, names]) => sum + names.length * PRICE_PER_CHILD,
    0,
  );

  function formatNames(names: string[]): string {
    if (names.length <= 1) return names[0] || "";
    if (names.length === 2) return `${names[0]} and ${names[1]}`;
    return `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;
  }

  if (entries.length === 0) {
    return null;
  }

  return (
    <>
      <div className={style.paymentsCard}>
        {entries.map(([label, names], i) => (
          <div key={i} className={style.classRow}>
            <div className={style.classInfo}>
              <p className={style.className}>{label}</p>
              <p className={style.classEnrolling}>
                Enrolling {formatNames(names)}
              </p>
            </div>
            <div className={style.classPricing}>
              <p className={style.classPrice}>
                CA$ {names.length * PRICE_PER_CHILD}
              </p>
              <p className={style.classPricePerChild}>
                CA$ {PRICE_PER_CHILD} per child
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className={style.totalSection}>
        <p className={style.totalAmount}>CA$ {totalCost}</p>
        <p className={style.totalLabel}>Total cost</p>
      </div>

      {error && <p className={style.payError}>{error}</p>}

      <div className={style.paymentActions}>
        <button
          type="button"
          className={style.payCardBtn}
          onClick={onPay}
          disabled={submitting}
        >
          {submitting ? "Creating Order..." : "Pay with Interac"}
        </button>
        {/* <button
          type="button"
          className={style.payInteracBtn}
          onClick={onPay}
          disabled={submitting}
        >
          Pay with Interac
        </button> */}
      </div>
    </>
  );
}
