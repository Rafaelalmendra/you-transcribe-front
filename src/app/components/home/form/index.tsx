"use client";

import { useState } from "react";
import type { ChangeEvent } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "../../../../navigation";

// hooks
import { toast } from "hooks";

// components
import { Input, Button, ButtonLoading, Combobox } from "components";

// icons
import { PlayCircle } from "lucide-react";
import { LanguageCodeMock } from "mocks";

const FormHome = () => {
  const router = useRouter();
  const t = useTranslations("Home");
  const languageCode = LanguageCodeMock();

  // values
  const [urlValue, setUrlValue] = useState("");
  const [languageValue, setLanguageValue] = useState("");

  // general-states
  const [valueIsValid, setValueIsValid] = useState(true);
  const [loadingButton, setLoadingButton] = useState(false);

  const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUrlValue(value);

    const linkRegex = /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
    setValueIsValid(linkRegex.test(value));

    if (value === "") {
      setValueIsValid(true);
    }
  };

  const handleSubmit = async () => {
    if (urlValue === "" || languageValue === "") {
      return toast({
        title: t("emptyUrl"),
        variant: "destructive",
        "aria-label": t("emptyUrl"),
      });
    }

    setLoadingButton(true);

    const videoId = urlValue.split("v=")[1];
    router.push(`/${videoId}?lang=${languageValue}`);
  };

  return (
    <div className="w-[540px] flex flex-col justify-center gap-4 lg:gap-3 mt-[26px]">
      <div className="flex items-center gap-3">
        <Input
          type="url"
          placeholder={t("buttonPlaceholder")}
          className="w-[65%] h-[40px]"
          value={urlValue}
          onChange={(e) => handleUrlChange(e)}
        />

        <Combobox
          className="w-[35%]"
          classNameOpenMenu="w-[200px]  max-h-[342px] overflow-y-auto"
          placeholder="Selecione o idioma"
          options={languageCode}
          value={languageValue}
          setValue={setLanguageValue}
        />
      </div>

      {!loadingButton && (
        <Button
          className={`w-full font-medium ${
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
      )}

      {loadingButton && (
        <ButtonLoading
          className={`w-full lg:w-auto font-medium bg-gradient-to-r from-[#3AC4E2] to-[#E4EBC7] text-[#09090B] gap-[10px]`}
        />
      )}
    </div>
  );
};

export { FormHome };
