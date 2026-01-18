import { Card } from "@/components/common/Card";
import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { trustPolicies } from "@/data/site";

export function TrustPolicySection() {
  return (
    <Section variant="muted">
      <SectionTitle
        eyebrow="TRUST & POLICY"
        title="믿고 구독할 수 있도록"
        subtitle="회수/세척, 파손/분실, 시듦 보상, 스킵/해지 정책을 명확히 안내합니다."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {trustPolicies.map((policy, idx) => (
          <Reveal key={policy.title} delay={idx * 70}>
            <Card className="flex h-full flex-col gap-2 p-4">
              <h3 className="text-h4">{policy.title}</h3>
              <p className="text-sm leading-6 text-text-muted">{policy.description}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
