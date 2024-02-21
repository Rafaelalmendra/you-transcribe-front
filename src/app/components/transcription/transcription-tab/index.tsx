"use client";

import { useTranslations } from "next-intl";

// components
import { TranscriptionError, TranscriptionLoading } from "components";

type TranscriptionTabProps = {
  data: any;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  isRefetching: boolean;
};

const TranscriptionTab = ({
  data,
  isError,
  isLoading,
  isSuccess,
  isRefetching,
}: TranscriptionTabProps) => {
  const t = useTranslations("Transcription");

  return (
    <div className="mb-[124px]">
      {(isLoading || isRefetching) && <TranscriptionLoading />}

      {!isLoading && !isRefetching && isError && <TranscriptionError />}

      {!isLoading && !isRefetching && data && (
        <p className="text-justify text-lg dark:text-slate-300">{data.text}</p>
      )}
    </div>
  );
};

export { TranscriptionTab };
