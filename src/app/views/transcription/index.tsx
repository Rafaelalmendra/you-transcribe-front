import { TranscriptionTabs } from "components";

type TranscriptionProps = {
  id: string;
};

const TranscriptionView = ({ id }: TranscriptionProps) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center px-4 xl:px-0 pt-12 2xl:pt-0">
      <div className="w-full lg:w-[820px] flex flex-col items-center px-4 xl:px-0 mt-[18px] lg:mt-[3.625rem]">
        <div className="w-full h-[184px] lg:h-[424px] bg-slate-600">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${id}?si=nSfbcj7WN5hwifEq?autoplay=1&vq=hd720&rel=0&showinfo=0&disablekb=1&enablejsapi=1&loop=1&playsinline=1&`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>

        <TranscriptionTabs id={id} />
      </div>
    </div>
  );
};

export { TranscriptionView };
