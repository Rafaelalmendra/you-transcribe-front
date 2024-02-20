import type { NextPage } from "next";
import { TranscriptionView } from "views";

type TranscriptionProps = {
  params: {
    id: string;
  };
};

const Transcription: NextPage<TranscriptionProps> = async ({ params }) => {
  return <TranscriptionView id={params.id} />;
};

export default Transcription;
