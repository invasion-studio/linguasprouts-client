"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import AppBar from "@/components/AppBar/AppBar";
import { useCreateInteracPayments } from "@/hooks/useCreateInteracPayments";
import {
  ChildInfoForm,
  ParentInfoForm,
  PaymentsSection,
} from "@/modules/registration/components";

import style from "./page.module.css";

const STEPS = ["Parent Info", "Child Info", "Payments"] as const;

const CAMP_NAME_MAP: Record<string, "french" | "spanish"> = {
  "French Class": "french",
  "Spanish Class": "spanish",
};

export type ParentFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export type ChildData = {
  firstName: string;
  lastName: string;
  age: string;
  allergies: string;
  camps: string[];
  saved: boolean;
};

export default function RegisterPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const createPayment = useCreateInteracPayments();

  const [parentForm, setParentForm] = useState<ParentFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

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

  function handleParentChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setParentForm({ ...parentForm, [e.target.name]: e.target.value });
  }

  function handleChildChange(
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
          fullName:
            `${parentForm.firstName.trim()} ${parentForm.lastName.trim()}`.trim(),
          email: parentForm.email.trim(),
          phone: parentForm.phone,
        },
        children: validChildren.map((c) => ({
          fullName: `${c.firstName.trim()} ${c.lastName.trim()}`.trim(),
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

      <main className={style.main}>
        <div className={style.card}>
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
