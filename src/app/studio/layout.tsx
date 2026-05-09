import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inside the Studio",
  description: "Meet the team behind White Arrow Softwares. A small, senior-led studio focused on precision and craft in Nashik.",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
