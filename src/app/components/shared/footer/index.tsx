import { useTranslations } from "next-intl";

type FooterProps = {
  hasBackground?: boolean;
};

const Footer = ({ hasBackground }: FooterProps) => {
  const t = useTranslations("General");

  return (
    <footer
      className={`w-full h-[4.75rem] flex items-center justify-center ${
        hasBackground
          ? "bg-slate-100 dark:bg-[#09090B] shadow-2xl"
          : "transparent"
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
