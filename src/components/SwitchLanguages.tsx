"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useTransition } from "react";

type LanguageOption = {
  locale: "en" | "pt";
  flag: string;
  label: string;
};

const languages: LanguageOption[] = [
  { locale: "pt", flag: "/brasil.svg", label: "Português" },
  { locale: "en", flag: "/usa.svg", label: "English" },
];

const SwitchLanguages = () => {
  const pathname = usePathname();
  const router = useRouter();
  const locate = useLocale();
  const [isPending, startTransition] = useTransition();
  const currentLanguage = languages.find((lang) => lang.locale === locate);

  const handleSwitch = (nextLocale: "en" | "pt") => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div className="relative inline-block text-left group">
      <button
        type="button"
        className="flex items-center justify-center w-full focus:outline-none"
        disabled={isPending}
      >
        {currentLanguage && (
          <Image
            src={currentLanguage.flag}
            alt={currentLanguage.label}
            width={1000}
            height={1000}
            className="w-8 h-8"
          />
        )}
      </button>
      <div className="absolute right-0 w-40 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <div className="py-1" role="menu" aria-orientation="vertical">
          {languages.map((lang) => (
            <button
              key={lang.locale}
              onClick={() => handleSwitch(lang.locale)}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 disabled:opacity-50"
              role="menuitem"
              disabled={isPending}
            >
              <Image
                src={lang.flag}
                alt={lang.label}
                width={24}
                height={24}
                className="w-6 h-6 mr-3 rounded-full"
              />
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SwitchLanguages;
