import type { ReactNode } from "react";
import { Footer, Navbar } from "components";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <main className="w-full h-full">{children}</main>

      <Footer />
    </div>
  );
};

export { Layout };
