"use client";

import { useRouter } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const MainContent = () => {
  const navigation = useRouter();
  const locate = useLocale();
  const textLang = useTranslations("HomePage");

  return (
    <main className="flex flex-col-reverse md:flex-row gap-12 w-full items-center justify-center mt-4 md:mt-20 p-6">
      <div className="w-[19rem] h-[19rem] sm:w-[26rem] sm:h-[26rem] rounded-full">
        <Image
          width={400}
          height={400}
          src="/me.jpg"
          alt="profile foto"
          className="w-full h-full rounded-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-6xl mb-6">{textLang("title")}</h2>
        <p className="font-semibold text-xl">{textLang("subtitle")}</p>
        <p className="w-72 sm:w-96 ">{textLang("description")}</p>
        <div>
          <ul className="text-black font-bold text-lg md:text-xl flex justify-center items-center gap-2 md:gap-4 mt-4">
            <li
              onClick={() => {
                navigation.push("/curriculo");
              }}
              className="bg-primary hover:bg-transparent hover:border-2 hover:border-primary hover:text-primary p-4 w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center rounded-full border border-black cursor-pointer"
            >
              <Link href="/curriculo" locale={locate}>
                {textLang("button1")}
              </Link>
            </li>
            <li
              onClick={() => {
                navigation.push("/projetos");
              }}
              className="bg-secondary hover:bg-transparent hover:border-2 hover:border-secondary hover:text-secondary p-4 w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center rounded-full border border-black cursor-pointer"
            >
              <Link href="/projetos" locale={locate}>
                {textLang("button2")}
              </Link>
            </li>
            <li
              onClick={() => {
                navigation.push("/contato");
              }}
              className="bg-thirth hover:bg-transparent hover:border-2 hover:border-thirth hover:text-thirth p-4 w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center rounded-full border border-black cursor-pointer"
            >
              <Link href="/contato" locale={locate}>
                {textLang("button3")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
