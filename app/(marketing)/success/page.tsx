"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { verifyPayment } from "@/lib/api";
import style from "./page.module.css";
import AppBar from "@/components/AppBar/AppBar";

type Status = "loading" | "paid" | "pending" | "failed";

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    if (!sessionId) {
      // setStatus("failed");
      return;
    }

    verifyPayment(sessionId)
      .then((res) => {
        if (res.data.paymentStatus === "paid") {
          setStatus("paid");
        } else {
          setStatus("pending");
        }
      })
      .catch(() => {
        // Even if verification fails, show success since Stripe redirected here
        setStatus("paid");
      });
  }, [sessionId]);

  if (!sessionId) {
    return (
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
              We will reach out to you soon with your order information so that
              you can complete your payment. You can also send us a message at{" "}
              <a
                href="mailto:info@linguasprouts.ca"
                className={style.successLink}
              >
                info@linguasprouts.ca
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {status === "loading" && (
        <div className={style.loadingContainer}>
          <p className={style.loadingText}>Verifying your payment...</p>
        </div>
      )}

      {(status === "paid" || status === "pending") && (
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
                <a
                  href="mailto:info@linguasprouts.ca"
                  className={style.successLink}
                >
                  info@linguasprouts.ca
                </a>
              </p>
            </div>
          </div>
        </div>
      )}

      {status === "failed" && (
        <div className={style.loadingContainer}>
          <p className={style.loadingText}>
            Something went wrong verifying your payment.
          </p>
          <Link href="/register" className={style.retryLink}>
            Go back to registration
          </Link>
        </div>
      )}
    </>
  );
}

export default function SuccessPage() {
  return (
    <div className={style.page}>
      {/* Header */}
      <AppBar />

      <main className={style.main}>
        <Suspense
          fallback={
            <div className={style.loadingContainer}>
              <p className={style.loadingText}>Loading...</p>
            </div>
          }
        >
          <SuccessContent />
        </Suspense>
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
