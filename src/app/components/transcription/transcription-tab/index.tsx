"use client";

import { useTranslations } from "next-intl";

// components
import { TranscriptionError, TranscriptionLoading } from "components";

type TranscriptionTabProps = {
  data: any;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
};

const TranscriptionTab = ({
  data,
  isError,
  isLoading,
  isSuccess,
}: TranscriptionTabProps) => {
  const t = useTranslations("Transcription");

  return (
    <div className="mb-[64px]">
      {isLoading && <TranscriptionLoading />}

      {!isLoading && isError && <TranscriptionError />}

      {!isLoading && isSuccess && data && (
        <p className="text-justify text-lg dark:text-slate-300">{data.text}</p>
      )}
    </div>
  );
};

export { TranscriptionTab };
