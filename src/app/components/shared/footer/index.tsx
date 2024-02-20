import { useTranslations } from "next-intl";

type FooterProps = {
  hasBackground?: boolean;
};

const Footer = ({ hasBackground }: FooterProps) => {
  const t = useTranslations("General");

  return (
    <footer
      className={`fixed bottom-0 w-full h-[4.75rem] flex items-center justify-center ${
        hasBackground
          ? "border-t-[1px] border-[#e9e9e9] bg-[#FFFFFF] dark:border-[#27272A]  dark:bg-[#020817]"
          : "bg-transparent"
      } `}
    >
      <div className="max-w-[1280px] w-full flex items-center justify-between text-[#A1A1AA]n">
        <p className="text-sm text-[#A1A1AA]">
          {t("footer")}{" "}
          <a
            target="_blank"
            className="underline"
            href="https://rafaelalmendra.com"
          >
            Rafael Almendra
          </a>
        </p>
        <p className="text-sm text-[#A1A1AA]">V1.0.0</p>
      </div>
    </footer>
  );
};

export { Footer };
