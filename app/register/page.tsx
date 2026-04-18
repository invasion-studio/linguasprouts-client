"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./page.module.css";

const STEPS = ["Parent Info", "Child Info", "Payments"] as const;
const CAMP_OPTIONS = ["French Class", "Spanish Class"] as const;

export default function RegisterPage() {
  const [activeStep, setActiveStep] = useState(0);

  // Parent form
  const [parentForm, setParentForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  // Children form
  type ChildData = { firstName: string; lastName: string; age: string; allergies: string; camps: string[]; saved: boolean };
  const [children, setChildren] = useState<ChildData[]>([
    { firstName: "", lastName: "", age: "", allergies: "", camps: [], saved: false },
  ]);

  function handleParentChange(e: React.ChangeEvent<HTMLInputElement>) {
    setParentForm({ ...parentForm, [e.target.name]: e.target.value });
  }

  function handleChildChange(index: number, e: React.ChangeEvent<HTMLInputElement>) {
    const updated = [...children];
    updated[index] = { ...updated[index], [e.target.name]: e.target.value };
    setChildren(updated);
  }

  function toggleCamp(childIndex: number, camp: string) {
    const updated = [...children];
    const camps = updated[childIndex].camps;
    if (camps.includes(camp)) {
      updated[childIndex] = { ...updated[childIndex], camps: camps.filter((c) => c !== camp) };
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
    // Save current unsaved child first
    const updated = children.map((c) => (c.firstName ? { ...c, saved: true } : c));
    setChildren([
      ...updated,
      { firstName: "", lastName: "", age: "", allergies: "", camps: [], saved: false },
    ]);
  }

  const [paid, setPaid] = useState(false);

  function handleNext() {
    if (activeStep < STEPS.length - 1) {
      setActiveStep(activeStep + 1);
    }
  }

  function handlePay() {
    setPaid(true);
  }

  return (
    <div className={style.page}>
      {/* Header */}
      <header className={style.header}>
        <Link href="/" className={style.logo}>
          <span className={style.logoBlue}>Lingua</span>
          <span className={style.logoGreen}>Sprouts</span>
        </Link>
      </header>

      {paid ? (
        <>
          {/* Success page */}
          <main className={style.main}>
            <div className={style.successContainer}>
              <div className={style.successInner}>
                <div className={style.successHero}>
                  <div className={style.successText}>
                    <h1 className={style.successTitle}>Thank You!!</h1>
                    <p className={style.successSubtitle}>
                      We are pleased to have you at Summer Camp 2026
                    </p>
                  </div>
                  <Image
                    src="/registration-success.png"
                    alt="Registration success"
                    width={340}
                    height={263}
                    className={style.successImage}
                  />
                </div>
                <div className={style.successMessage}>
                  <p className={style.successMessageText}>
                    We will reach out to you soon. You can also send us a message at{" "}
                    <a href="mailto:info@linguasprouts.ca" className={style.successLink}>
                      info@linguasprouts.ca
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </main>
        </>
      ) : (
        <>
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
                  <PaymentsSection children={children} onPay={handlePay} />
                )}

                {activeStep < 2 && (
                  <div className={style.actions}>
                    <button type="button" className={style.nextBtn} onClick={handleNext}>
                      Next
                    </button>
                  </div>
                )}
              </section>
            </div>
          </main>
        </>
      )}

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
  children: { firstName: string; lastName: string; age: string; allergies: string; camps: string[]; saved: boolean }[];
  onChildChange: (index: number, e: React.ChangeEvent<HTMLInputElement>) => void;
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
        )
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
  child: { firstName: string; lastName: string; age: string; allergies: string; camps: string[] };
  onEdit: () => void;
}) {
  const details = [
    child.age ? `${child.age} years` : "",
    child.camps.length > 0 ? child.camps.map((c) => c.replace(" Class", "")).join(", ") : "",
    child.allergies || "",
  ].filter(Boolean);

  return (
    <div className={style.childCard}>
      <div className={style.childCardInfo}>
        <p className={style.childCardName}>
          {child.firstName} {child.lastName}
        </p>
        <p className={style.childCardDetails}>
          {details.join("  ·  ")}
        </p>
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

  const displayValue = selected.length > 0
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
                <div className={`${style.checkbox} ${checked ? style.checkboxChecked : ""}`}>
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

const PRICE_PER_CHILD = 299;

function PaymentsSection({
  children,
  onPay,
}: {
  children: { firstName: string; camps: string[] }[];
  onPay: () => void;
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
    0
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

      <div className={style.paymentActions}>
        <button type="button" className={style.payCardBtn} onClick={onPay}>
          Pay with card
        </button>
        <button type="button" className={style.payInteracBtn} onClick={onPay}>
          Pay with Interac
        </button>
      </div>
    </>
  );
}
