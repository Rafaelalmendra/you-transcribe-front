import { useTranslations } from "next-intl";

const TranscriptionView = () => {
  const t = useTranslations("Transcription");

  return (
    <div className="h-screen flex flex-col items-center justify-center px-4 xl:px-0 pt-12 2xl:pt-0">
      <div>
        <p>Hello world</p>
      </div>
    </div>
  );
};

export { TranscriptionView };
