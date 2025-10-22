import type { ReactElement } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PaymentViewer from "@/components/PaymentViewer";

export default function Home(): ReactElement {
  return (
    <div className="flex h-screen items-center justify-center font-sans bg-zinc-200">
      <main className="w-full h-screen md:h-auto md:w-[420px]  bg-zinc-50 p-4">
        <Header />
        <PaymentViewer />
        <Footer />
      </main>
    </div>
  );
}
