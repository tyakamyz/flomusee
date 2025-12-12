import { Card } from "@/components/common/Card";

export type FAQ = {
  question: string;
  answer: string;
};

export function FAQItem({ item }: { item: FAQ }) {
  return (
    <Card className="p-5">
      <h3 className="text-base font-semibold">{item.question}</h3>
      <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">{item.answer}</p>
    </Card>
  );
}
