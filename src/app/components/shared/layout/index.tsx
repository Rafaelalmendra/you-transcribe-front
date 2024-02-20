"use client";

import type { ReactNode } from "react";
import { Footer, Navbar } from "components";
import { usePathname } from "next/navigation";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();

  const hasBgInIdPage = pathname.includes("id");

  return (
    <div className="w-full h-full">
      <Navbar />
      <main className="w-full h-full">{children}</main>

      <Footer hasBackground={hasBgInIdPage} />
    </div>
  );
};

export { Layout };
