"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/#about");
  }, [router]);

  return <p className="sr-only">플로뮤제 소개 섹션으로 이동합니다.</p>;
}
