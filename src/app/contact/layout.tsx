import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start a Project",
  description: "Ready to build something sharp? Shoot the arrow and let's discuss your next high-impact software project.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
