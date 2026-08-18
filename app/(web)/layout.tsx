import WebLayout from "@/src/shared/layout/web-layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <WebLayout>{children}</WebLayout>;
}
