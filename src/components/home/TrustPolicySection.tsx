import { Card } from "@/components/common/Card";
import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { trustPolicies } from "@/data/site";

const bullets = ["파손 교체", "향 강도 가이드", "스킵/해지 정책"];

export function TrustPolicySection() {
  return (
    <Section variant="muted">
      <SectionTitle
        eyebrow="TRUST & POLICY"
        title="믿고 구독할 수 있도록"
        subtitle="교체, 스킵, 향 강도, 주소 변경까지 핵심만 정리했습니다."
      />
      <ul className="grid gap-2 text-sm text-muted sm:grid-cols-3">
        {bullets.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="h-px w-8 bg-accent-gold/60" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {trustPolicies.map((policy, idx) => (
          <Reveal key={policy.title} delay={idx * 70}>
            <Card className="flex h-full flex-col gap-2 p-4">
              <h3 className="text-h4">{policy.title}</h3>
              <p className="text-sm leading-6 text-muted">{policy.description}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
