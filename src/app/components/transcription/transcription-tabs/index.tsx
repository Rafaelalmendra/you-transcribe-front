"use client";

import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useTranslations } from "next-intl";

// lib
import api from "lib/api";

// hooks
import { toast } from "hooks";

// components
import {
  Tabs,
  TabsList,
  ResumeTab,
  TabsContent,
  TabsTrigger,
  TranscriptionTab,
} from "components";

type TranscriptionProps = {
  id: string;
};

const TranscriptionTabs = ({ id }: TranscriptionProps) => {
  const searchParams = useSearchParams();
  const t = useTranslations("Transcription");

  const { data, isLoading, isRefetching, isSuccess, isError } = useQuery({
    queryKey: ["transcriptionData", id],
    queryFn: () => getTranscriptionData(),
  });

  const getTranscriptionData = async () => {
    const lang = searchParams.get("lang");

    try {
      const response = await api.get(`/transcription`, {
        params: {
          videoId: id,
          lang: lang,
        },
      });
      if (!response) return;

      return response.data;
    } catch (error) {
      console.error(error);
      toast({
        title: t("error"),
        description: t("tryAgain"),
        variant: "destructive",
      });
    }
  };

  return (
    <Tabs
      defaultValue="transcription"
      className="w-full mt-[18px] flex flex-col items-center justify-center"
    >
      {!isLoading && !isRefetching && (
        <TabsList className="flex items-center justify-center">
          <TabsTrigger value="transcription">{t("transcription")}</TabsTrigger>
          <TabsTrigger value="resume">{t("resume")}</TabsTrigger>
        </TabsList>
      )}

      <TabsContent value="transcription" className="mt-[20px]">
        <TranscriptionTab
          data={data}
          isError={isError}
          isLoading={isLoading}
          isSuccess={isSuccess}
          isRefetching={isRefetching}
        />
      </TabsContent>

      <TabsContent value="resume">
        <ResumeTab />
      </TabsContent>
    </Tabs>
  );
};
export { TranscriptionTabs };
