import type { ReactNode } from "react";

type BenefitCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => {
  return (
    <div className="w-[262px] h-[164px] rounded-[8px] bg-[#150d1ab6] p-[16px]">
      <div className="flex items-center gap-2 mb-[10px]">
        <div className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#311051be]">
          {icon}
        </div>
        <h4 className="text-[#FAFAFA] font-semibold text-[18px]">{title}</h4>
      </div>

      <p className="text-sm text-[#A1A1AA] leading-6">{description}</p>
    </div>
  );
};

export { BenefitCard };
