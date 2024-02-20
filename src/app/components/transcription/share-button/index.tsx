"use client";

import { useState } from "react";
import { CheckCircle2, Share } from "lucide-react";
import { useTranslations } from "next-intl";
import { toast } from "hooks";
import { Button } from "components";

const ShareButton = () => {
  const t = useTranslations("Transcription");
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);

    toast({
      title: `${t("linkCopied")} ✅`,
    });

    setTimeout(() => {
      setCopiedLink(false);
    }, 2000);
  };

  return (
    <div className="absolute top-[-44px] lg:top-0 right-0 lg:right-[-52px] flex flex-col gap-4">
      <Button size="icon" variant="outline" onClick={handleCopyLink}>
        {copiedLink && (
          <CheckCircle2 size={16} className="text-green-500 animate-ping" />
        )}
        {!copiedLink && <Share size={16} className=" animate-out" />}
      </Button>
    </div>
  );
};

export { ShareButton };
