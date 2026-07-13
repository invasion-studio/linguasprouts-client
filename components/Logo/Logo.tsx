"use client";

import Link from "next/link";
import Image from "next/image";

export default function Logo({ variant }: { variant?: "white" }) {
  return (
    <Link href="/">
      <Image
        src={
          variant == "white"
            ? "/WhiteLogo-LinguaSprouts.svg"
            : "/Logo-LinguaSprouts.svg"
        }
        alt="Logo"
        width={132}
        height={26}
        preload
        style={{ marginTop: 8, marginRight: "38px" }}
      />
    </Link>
  );
}
