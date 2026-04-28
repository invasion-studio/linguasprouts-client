"use client";

import style from "@/app/(marketing)/register/page.module.css";

const PRICE_PER_CHILD = 249;

type PaymentsSectionProps = {
  children: { firstName: string; camps: string[] }[];
  onPay: () => void;
  submitting: boolean;
  error: string | null;
};

export function PaymentsSection({
  children,
  onPay,
  submitting,
  error,
}: PaymentsSectionProps) {
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
      </div>
    </>
  );
}
