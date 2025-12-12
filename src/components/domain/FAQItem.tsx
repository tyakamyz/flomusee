import { Card } from "@/components/common/Card";

export type FAQ = {
  question: string;
  answer: string;
};

export function FAQItem({ item }: { item: FAQ }) {
  return (
    <Card className="p-5">
      <h3 className="text-base font-semibold text-text-main">{item.question}</h3>
      <p className="mt-3 text-sm leading-6 text-text-muted">{item.answer}</p>
    </Card>
  );
}
