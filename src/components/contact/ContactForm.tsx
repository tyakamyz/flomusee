"use client";

import { Button } from "@/components/common/Button";
import { siteConfig } from "@/config/site";
import { useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  topic: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  topic: "구독 상담",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const isValid = useMemo(() => {
    return form.name.trim() && form.email.trim() && form.message.trim();
  }, [form]);

  const handleChange = (
    field: keyof FormState,
    value: string,
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValid) {
      setError("이름, 이메일, 문의 내용을 입력해주세요.");
      return;
    }

    try {
      setSubmitting(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const payload = (await response.json()) as { error?: string };
        throw new Error(payload.error || "제출에 실패했습니다. 잠시 후 다시 시도해주세요.");
      }

      setSuccess("문의가 접수되었습니다. 최대 1영업일 내 이메일로 회신드립니다.");
      setForm(initialState);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "제출에 실패했습니다. 잠시 후 다시 시도해주세요.";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
    >
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-primary-dark dark:text-zinc-100">
          이름
        </label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-primary-dark outline-none ring-2 ring-transparent transition focus:ring-black/10 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:focus:ring-white/20"
          placeholder="홍길동"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-primary-dark dark:text-zinc-100">
          이메일
        </label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-primary-dark outline-none ring-2 ring-transparent transition focus:ring-black/10 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:focus:ring-white/20"
          placeholder="you@example.com"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-primary-dark dark:text-zinc-100">
          문의 주제
        </label>
        <select
          value={form.topic}
          onChange={(e) => handleChange("topic", e.target.value)}
          className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-primary-dark outline-none ring-2 ring-transparent transition focus:ring-black/10 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:focus:ring-white/20"
        >
          <option>구독 상담</option>
          <option>작가/브랜드 콜라보</option>
          <option>배송/회수 문의</option>
          <option>기타</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-primary-dark dark:text-zinc-100">
          문의 내용
        </label>
        <textarea
          value={form.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className="min-h-[140px] rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-primary-dark outline-none ring-2 ring-transparent transition focus:ring-black/10 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:focus:ring-white/20"
          placeholder="배송 일정, 콜라보 제안, 기타 문의를 남겨주세요."
        />
      </div>
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
      {success ? <p className="text-sm text-green-600">{success}</p> : null}
      <div className="flex flex-col gap-2">
        <Button type="submit" className="w-full sm:w-fit" disabled={submitting}>
          {submitting ? "전송 중..." : "문의 제출"}
        </Button>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          서버로 전송된 후 확인 이메일을 회신합니다. 추가 연락이 필요하면 {siteConfig.contactEmail} 로 직접 메일을 보내주세요.
        </p>
      </div>
    </form>
  );
}
