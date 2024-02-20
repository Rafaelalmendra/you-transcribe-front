"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LoaderIcon } from "lucide-react";
import { useTranslations } from "next-intl";

const TranscriptionLoading = () => {
  const t = useTranslations("Transcription");
  const [loadingMessageIndex, setLoadingMessageIndex] = useState(1);
  const loadingMessages = [
    t("loadingText1"),
    t("loadingText2"),
    t("loadingText3"),
    t("loadingText4"),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingMessageIndex((prevIndex) =>
        prevIndex === loadingMessages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col items-center justify-center pb-10 text-center">
      <Image
        width={180}
        height={180}
        objectFit="contain"
        alt="Building vector"
        src="/vectors/speech_to_text.svg"
        className="animate-pulse"
      />

      <div className="mt-4 flex flex-col lg:flex-row justify-center items-center gap-3 dark:text-slate-200">
        <LoaderIcon className="h-6 w-6 animate-spin" />
        <p className="text-[20px]">{t("loadingTitle")}</p>
      </div>

      <motion.div
        className="mt-1 flex items-center gap-3 dark:text-slate-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        key={loadingMessageIndex}
      >
        <p className="mt-1 text-lg dark:text-slate-400">
          {loadingMessages[loadingMessageIndex]}
        </p>
      </motion.div>
    </div>
  );
};

export { TranscriptionLoading };
