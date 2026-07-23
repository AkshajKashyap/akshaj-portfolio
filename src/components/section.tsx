import type { ReactNode } from "react";
import { Container } from "@/components/container";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

export function Section({ children, id, className = "" }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-16 md:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
