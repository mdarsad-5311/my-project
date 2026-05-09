import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "A showcase of high-performance digital products engineered by White Arrow Softwares. From Industrial AI to SaaS platforms.",
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
