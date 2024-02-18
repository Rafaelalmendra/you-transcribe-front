"use client";

import { useState } from "react";
import type { ChangeEvent } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "../../../../navigation";

// hooks
import { toast } from "hooks";

// components
import { Input, Button } from "components";

// icons
import { PlayCircle } from "lucide-react";

const FormHome = () => {
  const router = useRouter();
  const t = useTranslations("Home");
  const [inputValue, setInputValue] = useState("");
  const [valueIsValid, setValueIsValid] = useState(true);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    const linkRegex = /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
    setValueIsValid(linkRegex.test(value));

    if (value === "") {
      setValueIsValid(true);
    }
  };

  const handleSubmit = async () => {
    if (inputValue === "") {
      return toast({
        title: t("emptyUrl"),
        variant: "destructive",
        "aria-label": t("emptyUrl"),
      });
    }

    const videoId = inputValue.split("v=")[1];
    router.push(`/${videoId}`);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row justify-center gap-4 lg:gap-2 mt-[26px]">
      <div className="flex flex-col">
        <Input
          type="url"
          placeholder={t("buttonPlaceholder")}
          className="w-full lg:w-[410px] h-[40px]"
          value={inputValue}
          onChange={(e) => handleInputChange(e)}
        />
        {!valueIsValid && (
          <p className="text-red-400 text-xs mt-2">{t("invalidUrl")}</p>
        )}
      </div>

      <Button
        className={`w-full lg:w-auto font-medium ${
          valueIsValid
            ? "bg-gradient-to-r from-[#3AC4E2] to-[#E4EBC7] text-[#09090B]"
            : "bg-gray-400 cursor-not-allowed"
        } gap-[10px]`}
        onClick={handleSubmit}
        disabled={!valueIsValid}
      >
        <PlayCircle size={20} />
        {t("button")}
      </Button>
    </div>
  );
};

export { FormHome };
