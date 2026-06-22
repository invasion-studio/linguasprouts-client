"use client";

import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src={"/Logo-LinguaSprouts.svg"}
        alt="Logo"
        width={132}
        height={26}
        loading="eager"
        style={{ marginTop: 8 }}
      />
    </Link>
  );
}
