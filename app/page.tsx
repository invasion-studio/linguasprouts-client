import Image from "next/image";
import Link from "next/link";
import style from "./page.module.css";

export default function Home() {
  return (
    <div className={style.page}>
      {/* Header */}
      <header className={style.header}>
        <Link href="/" className={style.logo}>
          <span className={style.logoBlue}>Lingua</span>
          <span className={style.logoGreen}>Sprouts</span>
        </Link>
        <nav className={style.nav}>
          <Link href="/register" className={style.registerBtn}>
            Register
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <main className={style.main}>
        <div className={style.hero}>
          <div className={style.heroContent}>
            <h1 className={style.heroTitle}>
              French/Spanish
              <br />
              Summer Camp
              <br />
              <span className={style.heroYear}>2026</span>
            </h1>
            <p className={style.heroSubtitle}>
              Give your child the gift of language this summer. Immersive French
              and Spanish camps designed for young learners in a fun,
              supportive environment.
            </p>
            <Link href="/register" className={style.heroCta}>
              Register Now
            </Link>
          </div>
          <div className={style.heroImageWrap}>
            <Image
              src="/registration-success.png"
              alt="Summer Camp illustration"
              width={400}
              height={310}
              className={style.heroImage}
              priority
            />
          </div>
        </div>

        {/* Features */}
        <div className={style.features}>
          <div className={style.feature}>
            <div className={style.featureIcon}>🇫🇷</div>
            <h3 className={style.featureTitle}>French Classes</h3>
            <p className={style.featureDesc}>
              Interactive lessons with native speakers in a playful camp setting.
            </p>
          </div>
          <div className={style.feature}>
            <div className={style.featureIcon}>🇪🇸</div>
            <h3 className={style.featureTitle}>Spanish Classes</h3>
            <p className={style.featureDesc}>
              Build conversational skills through games, songs, and creative activities.
            </p>
          </div>
          <div className={style.feature}>
            <div className={style.featureIcon}>☀️</div>
            <h3 className={style.featureTitle}>Summer Fun</h3>
            <p className={style.featureDesc}>
              Outdoor activities, arts &amp; crafts, and cultural experiences all summer long.
            </p>
          </div>
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
