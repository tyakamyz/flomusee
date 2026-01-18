"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/#contact");
  }, [router]);

  return <p className="sr-only">문의 섹션으로 이동합니다.</p>;
}
