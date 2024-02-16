import type { Metadata } from "next";

// components
import { Layout, ThemeProvider } from "components";

// styles
import "styles/globals.css";

// fonts
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YouTranscribe.AI - Home",
  description: "", // TODO: Add description
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/favicon.ico" sizes="any" />
      </head>

      <body className={inter.className}>
        <ThemeProvider
          enableSystem
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
