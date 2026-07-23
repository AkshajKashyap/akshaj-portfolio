import { Container } from "@/components/container";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-2 py-8 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>Akshaj Kashyap · UCSB Computer Science</p>
        <p>Professional links pending verification.</p>
      </Container>
    </footer>
  );
}
