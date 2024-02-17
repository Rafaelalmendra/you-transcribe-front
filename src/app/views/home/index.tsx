import { useTranslations } from "next-intl";

// components
import { BenefitCard, Button, GithubLinks, Input } from "components";

// icons
import { BadgeCheck, CircleDollarSign, PlayCircle, Rocket } from "lucide-react";
import Image from "next/image";

const HomeView = () => {
  const t = useTranslations("Home");

  const benefitsMock = [
    {
      id: 1,
      icon: <Rocket size={18} />,
      title: "Veloz",
      description: "Transcreva seus vídeos de forma ágil com e prática.",
    },
    {
      id: 2,
      icon: <BadgeCheck size={18} />,
      title: "Eficiente",
      description:
        "Uma ferramenta simples que entrega o que promete com total eficiência.",
    },
    {
      id: 3,
      icon: <CircleDollarSign size={18} />,
      title: "Gratuito",
      description: "Utilize o sistema de forma 100% gratuita e sem pegadinhas.",
    },
  ];

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-[3.5rem] font-bold text-[#FAFAFA] mb-1">
        {t("title")}
      </h1>

      <p className="max-w-[651px] text-center text-[24px] text-[#A1A1AA] mb-5">
        {t("description")}
      </p>

      <GithubLinks hasText />

      <div className="flex items-center gap-2 mt-[26px]">
        <Input
          placeholder="Adicione a URL do vídeo aqui"
          className="w-[410px] h-[40px]"
        />
        <Button className="font-medium bg-gradient-to-r from-[#3AC4E2] to-[#E4EBC7] text-[#09090B] gap-[10px]">
          <PlayCircle size={20} />
          {t("button")}
        </Button>
      </div>

      <p className="mt-[30px] text-[#A1A1AA]">🎉 {t("subtitle")}</p>

      <div className="grid grid-cols-3 gap-[54px] mt-[94px]">
        {benefitsMock.map((item) => (
          <BenefitCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <div className="absolute z-[-1] w-full h-full">
        <Image fill src="/images/bg-vector.svg" alt="Vector background" />
      </div>
    </div>
  );
};

export { HomeView };
