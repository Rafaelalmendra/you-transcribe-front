import { useTranslations } from "next-intl";

// components
import { Button, GithubLinks, Input } from "components";

// icons
import { PlayCircle } from "lucide-react";

const HomeView = () => {
  const t = useTranslations("Home");

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
    </div>
  );
};

export { HomeView };
