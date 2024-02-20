"use client";

import type { ReactNode } from "react";
import { useParams } from "next/navigation";
import { Footer, Navbar } from "components";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const params = useParams<{ id: string }>();

  return (
    <div className="w-full h-full">
      <Navbar />
      <main className="w-full h-full pt-[4rem]">{children}</main>

      <Footer hasBackground={!!params.id} />
    </div>
  );
};

export { Layout };
