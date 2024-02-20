"use client";

import type { ReactNode } from "react";
import { Footer, Navbar } from "components";
import { useParams } from "next/navigation";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const params = useParams<{ id: string }>();

  return (
    <div className="w-full h-full">
      <Navbar />
      <main className="w-full h-full">{children}</main>

      <Footer hasBackground={!!params.id} />
    </div>
  );
};

export { Layout };
