"use client";

import { useTranslations } from "next-intl";

// components
import { TranscriptionLoading } from "components";

type TranscriptionTabProps = {
  data: any;
  isLoading: boolean;
  isSuccess: boolean;
};

const TranscriptionTab = ({
  data,
  isLoading,
  isSuccess,
}: TranscriptionTabProps) => {
  const t = useTranslations("Transcription");

  return (
    <div>
      {isLoading && <TranscriptionLoading />}

      {!isLoading && isSuccess && data && (
        <p className="text-justify text-lg dark:text-slate-300">{data.text}</p>
      )}
    </div>
  );
};

export { TranscriptionTab };
