import Link from "next/link";
import Image from "next/image";

// components
import { Button, ThemeToggle } from "components";

const Navbar = () => {
  return (
    <nav className="w-full h-[4.75rem] flex items-center justify-center border-b-[1px] border-[#27272A]">
      <div className="max-w-[1280px] w-full flex items-center justify-between">
        <Link href="/">
          <Image
            priority
            width={174}
            height={232}
            quality={100}
            src="/icons/icon-full.svg"
            alt="YouTranscribe.AI Logo - Best AI Transcription Tool"
          />
        </Link>

        <div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
