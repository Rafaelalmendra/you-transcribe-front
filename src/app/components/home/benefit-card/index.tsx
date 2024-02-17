import type { ReactNode } from "react";

type BenefitCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => {
  return (
    <div className="w-[16.375rem] h-[10.25rem] rounded-[0.5rem] bg-[#ffffffb6] dark:bg-[#150d1ab6] p-[1rem] select-none hover:translate-y-[-8px] transition-all">
      <div className="flex items-center gap-2 mb-[10px]">
        <div className="w-[2.375rem] h-[2.375rem] flex items-center justify-center rounded-full bg-slate-200 dark:bg-[#311051be]">
          {icon}
        </div>
        <h4 className="text-slate-900 dark:text-[#FAFAFA] font-semibold text-[18px]">
          {title}
        </h4>
      </div>

      <p className="text-sm text-[#71717A] dark:text-[#A1A1AA] leading-6">
        {description}
      </p>
    </div>
  );
};

export { BenefitCard };
