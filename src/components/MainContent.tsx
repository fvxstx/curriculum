"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

const MainContent = () => {
  const textLang = useTranslations("HomePage");

  return (
    <section className="grid w-full grid-cols-1 items-center gap-10 rounded-[2rem] border border-white/60 bg-white/70 p-6 shadow-[0_20px_60px_rgba(66,75,84,0.12)] backdrop-blur-sm md:grid-cols-2 md:p-10 lg:gap-14 lg:p-12">
      <div className="order-2 flex justify-center md:order-1">
        <div className="relative h-[18rem] w-[18rem] sm:h-[24rem] sm:w-[24rem] lg:h-[26rem] lg:w-[26rem]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#93a8ac] via-[#e2b4bd] to-[#c5d5e4] p-[6px] animate-fade-up animate-duration-[1600ms]">
            <Image
              width={500}
              height={500}
              src="/me.jpg"
              alt="profile foto"
              className="h-full w-full rounded-full object-cover object-center"
            />
          </div>
          <span className="absolute -right-6 top-8 hidden h-12 w-12 rounded-2xl bg-[#ffb88f]/60 blur-[1px] md:block" />
          <span className="absolute -bottom-3 left-8 hidden h-10 w-20 rounded-full bg-[#8ec5ff]/60 blur-[1px] md:block" />
        </div>
      </div>

      <div className="order-1 flex flex-col gap-4 md:order-2">
        <div className="inline-flex w-fit items-center rounded-full border border-[#424B54]/20 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#424B54] animate-fade-left animate-duration-[1400ms]">
          {textLang("badge")}
        </div>
        <h2 className="mb-1 text-5xl font-bold leading-tight text-[#1f2d3d] animate-fade-left animate-duration-[1700ms] md:text-6xl">
          {textLang("title")}
        </h2>
        <p className="text-xl font-semibold text-[#344255] animate-fade-left animate-duration-[1700ms] animate-delay-[200ms]">
          {textLang("subtitle")}
        </p>
        <p className="max-w-xl text-[#3f4a57] animate-fade-left animate-duration-[1700ms] animate-delay-[400ms]">
          {textLang("description")}
        </p>

        <div className="mt-3 grid grid-cols-1 gap-3 text-sm font-bold text-[#1f2d3d] sm:grid-cols-3">
          <Link
            href="/curriculo"
            className="rounded-2xl border border-[#93a8ac]/35 bg-[#f6fbff] px-4 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-[#eef6ff] animate-fade-left animate-duration-[1700ms] animate-delay-[500ms]"
          >
            {textLang("button1")}
          </Link>
          <Link
            href="/projetos"
            className="rounded-2xl border border-[#e2b4bd]/45 bg-[#fff5f8] px-4 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffecf3] animate-fade-left animate-duration-[1700ms] animate-delay-[700ms]"
          >
            {textLang("button2")}
          </Link>
          <Link
            href="/contato"
            className="rounded-2xl border border-[#c5d5e4]/55 bg-[#f5f8ff] px-4 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-[#edf3ff] animate-fade-left animate-duration-[1700ms] animate-delay-[900ms]"
          >
            {textLang("button3")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
