import { useTranslations } from "next-intl";
import { BadgeCheck, CircleDollarSign, Rocket } from "lucide-react";

const BenefitsMock = () => {
  const t = useTranslations("Home");

  const benefitsMock = [
    {
      id: 1,
      icon: <Rocket size={18} />,
      title: t("fast"),
      description: t("fastDescription"),
    },
    {
      id: 2,
      icon: <BadgeCheck size={18} />,
      title: t("efficient"),
      description: t("efficientDescription"),
    },
    {
      id: 3,
      icon: <CircleDollarSign size={18} />,
      title: t("free"),
      description: t("freeDescription"),
    },
  ];

  return benefitsMock;
};

export { BenefitsMock };
