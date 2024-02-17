import Image from "next/image";
import { useTranslations } from "next-intl";

// mocks
import { BenefitsMock } from "mocks";

// components
import {
  Carousel,
  FormHome,
  GithubLinks,
  BenefitCard,
  CarouselItem,
  CarouselNext,
  CarouselContent,
  CarouselPrevious,
} from "components";

const HomeView = () => {
  const t = useTranslations("Home");
  const benefitsMock = BenefitsMock();

  return (
    <div className="h-screen flex flex-col items-center justify-center px-4 xl:px-0 pt-12 2xl:pt-0">
      <h1 className="text-[2rem] lg:text-[3.5rem] text-center font-bold light:text-[#09090B] dark:text-[#FAFAFA] mb-1">
        {t("title")}
      </h1>

      <p className="max-w-auto lg:max-w-[651px] text-center text-[16px] lg:text-[1.5rem] light:text-[#71717A] dark:text-[#A1A1AA] mb-5">
        {t("description")}
      </p>

      <GithubLinks hasText />

      <FormHome />

      <p className="mt-[30px] text-sm lg:text-base text-[#71717A] dark:text-[#A1A1AA]">
        🎉 {t("subtitle")}
      </p>

      <div className="hidden lg:grid grid-cols-3 gap-[54px] mt-[6.5rem]">
        {benefitsMock.map((item) => (
          <BenefitCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <Carousel className="max-w-xs lg:hidden mt-[2.625rem] px-4">
        <CarouselContent>
          {benefitsMock.map((item) => (
            <CarouselItem key={item.id}>
              <BenefitCard
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="pl-4" />
        <CarouselNext className="pr-4" />
      </Carousel>

      <div className="absolute z-[-1] w-full h-full">
        <Image fill src="/images/bg-vector.svg" alt="Vector background" />
      </div>
    </div>
  );
};

export { HomeView };
