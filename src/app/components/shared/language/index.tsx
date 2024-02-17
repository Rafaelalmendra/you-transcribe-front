"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "../../../../navigation";

// components
import {
  Button,
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "components";

// icons
import { Languages } from "lucide-react";

const LanguageToggle = () => {
  const pathname = usePathname();
  const t = useTranslations("General");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <Link href={pathname} locale="pt">
          <DropdownMenuItem>{t("portuguese")}</DropdownMenuItem>
        </Link>
        <Link href={pathname} locale="en">
          <DropdownMenuItem>{t("english")}</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { LanguageToggle };
