"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

// components
import {
  Button,
  ThemeToggle,
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "components";

// icons
import { Github } from "lucide-react";

const Navbar = () => {
  const { theme } = useTheme();

  const borderColor = theme === "light" ? "#878788" : "#27272A";

  return (
    <nav
      className={`w-full h-[4.75rem] flex items-center justify-center border-b-[1px] border-[${borderColor}]`}
    >
      <div className="max-w-[1280px] w-full flex items-center justify-between px-4 lg:px-0">
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Github size={18} />
                <span className="sr-only">Acessar Github</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <a
                target="_blank"
                href={process.env.NEXT_PUBLIC_GITHUB_FRONTEND_URL}
              >
                <DropdownMenuItem>Front-end</DropdownMenuItem>
              </a>
              <a
                target="_blank"
                href={process.env.NEXT_PUBLIC_GITHUB_BACKEND_URL}
              >
                <DropdownMenuItem>Back-end</DropdownMenuItem>
              </a>
            </DropdownMenuContent>
          </DropdownMenu>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
