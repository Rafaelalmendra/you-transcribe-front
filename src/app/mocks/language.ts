import { useTranslations } from "next-intl";

const LanguageCodeMock = () => {
  const t = useTranslations("Languages");

  const languageCode = [
    { label: t("pt"), value: "pt" },
    { label: t("en"), value: "en" },
    { label: t("en_us"), value: "en_us" },
    { label: t("en_au"), value: "en_au" },
    { label: t("en_uk"), value: "en_uk" },
    { label: t("es"), value: "es" },
    { label: t("fr"), value: "fr" },
    { label: t("de"), value: "de" },
    { label: t("it"), value: "it" },
    { label: t("nl"), value: "nl" },
    { label: t("hi"), value: "hi" },
    { label: t("ja"), value: "ja" },
    { label: t("zh"), value: "zh" },
    { label: t("fi"), value: "fi" },
    { label: t("ko"), value: "ko" },
    { label: t("pl"), value: "pl" },
    { label: t("ru"), value: "ru" },
    { label: t("tr"), value: "tr" },
    { label: t("uk"), value: "uk" },
    { label: t("vi"), value: "vi" },
  ];

  return languageCode;
};

export { LanguageCodeMock };
