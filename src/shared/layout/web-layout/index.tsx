import Footer from "./footer";
import NavBar from "./navbar";

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <NavBar /> */}
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
