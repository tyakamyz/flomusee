import { Button } from "@/components/common/Button";
import { Card } from "@/components/common/Card";
import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  return (
    <Section id="contact" variant="muted">
      <SectionTitle
        eyebrow="CONTACT"
        title="문의 및 콜라보 제안"
        subtitle="배송 일정 조율, 플랜 커스터마이즈, 작가·브랜드 협업 문의를 환영합니다."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="flex flex-col gap-4">
          <Card className="flex flex-col gap-3 p-5">
            <h3 className="text-h4">바로 연결하기</h3>
            <p className="text-sm text-text-muted">
              가장 빠른 연락 채널을 선택해 주세요. 영업일 기준 24시간 내 답변을 드립니다.
            </p>
            <div className="flex flex-col gap-2">
              <Button as="a" href={`mailto:${siteConfig.contactEmail}`} variant="secondary" className="w-full">
                이메일 보내기
              </Button>
              <Button as="a" href={siteConfig.kakaoUrl} variant="outline" className="w-full">
                Kakao 채널
              </Button>
              <Button as="a" href={siteConfig.instagramUrl} variant="ghost" className="w-full">
                Instagram DM
              </Button>
            </div>
            <p className="text-xs text-text-muted">
              화병 회수/배송 조율, 기업/행사 플라워 큐레이션, 작가 콜라보 제안을 위한 전용 채널입니다.
            </p>
          </Card>
        </div>
        <div className="lg:col-span-2">
          <Card className="p-0">
            <ContactForm />
          </Card>
        </div>
      </div>
    </Section>
  );
}
