import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Button } from "@/components/common/Button";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/config/site";

const contactButtonClass =
  "mt-4 w-fit rounded-full border border-primary bg-primary text-white transition-colors hover:bg-primary-dark hover:text-white focus-visible:outline-primary dark:border-white dark:bg-primary dark:text-white dark:hover:bg-primary-dark dark:hover:text-white";

export default function ContactPage() {
  return (
    <Section>
      <SectionTitle
        title="문의 및 콜라보 제안"
        subtitle="구독 변경, 파트너십, 작가 콜라보 제안을 환영합니다. 아래 채널로 연락 주세요."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-primary">
            <h3 className="text-lg font-semibold text-white">이메일</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              {siteConfig.contactEmail} (가상의 주소입니다)
            </p>
            <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
              폼 제출 시 기본 이메일 앱이 열립니다. 연락처를 포함해 주세요.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-primary">
            <h3 className="text-lg font-semibold text-white">카카오 채널</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              실시간 상담 및 배송 스케줄 문의를 빠르게 도와드립니다.
            </p>
            <Button
              as="a"
              href={siteConfig.kakaoUrl}
              variant="outline"
              className={contactButtonClass}
            >
              Kakao 채널 이동
            </Button>
          </div>
          <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-primary">
            <h3 className="text-lg font-semibold text-white">인스타그램 DM</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              최신 전시 소식과 플라워 스타일을 확인하고 DM으로 문의할 수 있습니다.
            </p>
            <Button
              as="a"
              href={siteConfig.instagramUrl}
              variant="outline"
              className={contactButtonClass}
            >
              Instagram 열기
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
