"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

// components
import { ThemeToggle, LanguageToggle, GithubLinks } from "components";

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <nav className="fixed z-10 w-full h-[4.75rem] flex items-center justify-center border-b-[1px] border-[#e9e9e9] dark:border-[#27272A] bg-[#FFFFFF] dark:bg-[#020817]">
      <div className="max-w-[1280px] w-full flex items-center justify-between px-4 xl:px-0">
        <Link href="/">
          <Image
            priority
            width={174}
            height={232}
            quality={100}
            src={
              theme === "light"
                ? "/logos/logo-full-dark.svg"
                : "/logos/logo-full-light.svg"
            }
            alt="YouTranscribe.AI Logo - Best AI Transcription Tool"
          />
        </Link>

        <div className="flex items-center gap-3">
          <GithubLinks />
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
