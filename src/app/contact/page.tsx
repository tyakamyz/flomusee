import { Button } from "@/components/common/Button";
import { Card } from "@/components/common/Card";
import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "GALLERYNOOK | 문의하기",
  description: "작가의 향 구독 문의, 배송 일정 조율, 작가/브랜드 콜라보 제안을 남겨주세요.",
};

export default function ContactPage() {
  return (
    <Section>
      <SectionTitle
        eyebrow="CONTACT"
        title="문의 및 콜라보 제안"
        subtitle="구독 변경, 배송 조율, 기업/작가 협업을 환영합니다. 가장 편한 채널을 선택해 주세요."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="p-5">
          <h3 className="text-h4">바로 연결</h3>
          <p className="mt-2 text-sm text-text-muted">영업일 기준 24시간 내 회신합니다.</p>
          <div className="mt-4 flex flex-col gap-2">
            <Button as="a" href={`mailto:${siteConfig.contactEmail}`} variant="primary" className="w-full">
              이메일 보내기
            </Button>
            <Button as="a" href={siteConfig.kakaoUrl} variant="outline" className="w-full">
              Kakao 채널 열기
            </Button>
            <Button as="a" href={siteConfig.instagramUrl} variant="ghost" className="w-full">
              Instagram DM
            </Button>
          </div>
          <p className="mt-3 text-xs text-text-muted">
            기업/행사 플라워 큐레이션, 작가 콜라보, 배송 일정 조율 모두 이 채널로 접수합니다.
          </p>
        </Card>
        <div className="lg:col-span-2">
          <Card className="p-0">
            <ContactForm />
          </Card>
        </div>
      </div>
    </Section>
  );
}
