"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ArtistsPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/#artists");
  }, [router]);

  return <p className="sr-only">아티스트 섹션으로 이동합니다.</p>;
}
