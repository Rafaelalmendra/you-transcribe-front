import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "components";

const TranscriptionError = () => {
  const t = useTranslations("Transcription");
  const handleReloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center mt-6 text-center">
      <Image
        width={200}
        height={200}
        objectFit="contain"
        alt="Image of a video player"
        src="/vectors/video_vector.svg"
      />

      <p className="mt-5 text-xl dark:text-slate-300">{t("errorTitle")}</p>
      <p className="text-lg dark:text-slate-400">{t("errorDescription")}</p>

      <Button className="mt-3" variant="outline" onClick={handleReloadPage}>
        {t("reloadPage")}
      </Button>
    </div>
  );
};

export { TranscriptionError };
