"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SubscribePage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/#plans");
  }, [router]);

  return <p className="sr-only">구독 플랜 섹션으로 이동합니다.</p>;
}
