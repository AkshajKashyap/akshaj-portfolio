import type { ReactNode } from "react";
import { Container } from "@/components/container";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

export function Section({ children, id, className = "" }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-14 sm:py-16 lg:py-20 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
