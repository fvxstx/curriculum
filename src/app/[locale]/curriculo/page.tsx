import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ExProfissional from "./components/ExProfissional";
import Education from "./components/Education";
import SkillsCertification from "./components/SkillsCertification";
import { getTranslations } from "next-intl/server";

export default async function CurriculoPage() {
  const translate = await getTranslations("Experiences");
  const homeTranslate = await getTranslations("HomePage");

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-gradient-to-b from-[#fff8f2] via-[#f6f8ff] to-[#edf5ff]">
      <Header />
      <div className="pointer-events-none absolute -left-24 -top-20 h-72 w-72 rounded-full bg-[#ffb88f]/30 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-56 h-80 w-80 rounded-full bg-[#8ec5ff]/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#ffd7e3]/40 blur-3xl" />

      <main className="relative z-10 flex w-full max-w-[1400px] flex-col items-center px-6 pb-20 pt-12 md:px-14 lg:px-20">
        <section className="mb-16 flex w-full flex-col gap-7 rounded-[2rem] border border-white/60 bg-white/65 p-8 shadow-[0_20px_60px_rgba(66,75,84,0.12)] backdrop-blur-sm md:mb-20 md:p-12 animate-fade-down animate-duration-[1400ms]">
          <div className="inline-flex w-fit items-center rounded-full border border-[#424B54]/20 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#424B54]">
            {translate("heroBadge")}
          </div>
          <h1 className="text-4xl font-bold leading-tight text-[#1f2d3d] md:text-6xl">
            {translate("title")}
          </h1>
          <p className="max-w-3xl text-base text-[#3f4a57] md:text-lg">
            {homeTranslate("description")}
          </p>
          <div className="grid grid-cols-1 gap-3 text-sm text-[#344255] md:grid-cols-3">
            <div className="rounded-2xl border border-[#93a8ac]/25 bg-[#ffffff]/75 px-4 py-3">
              {translate("heroChip1")}
            </div>
            <div className="rounded-2xl border border-[#93a8ac]/25 bg-[#ffffff]/75 px-4 py-3">
              {translate("heroChip2")}
            </div>
            <div className="rounded-2xl border border-[#93a8ac]/25 bg-[#ffffff]/75 px-4 py-3">
              {translate("heroChip3")}
            </div>
          </div>
        </section>

        <ExProfissional />

        <div className="my-16 h-[2px] w-full rounded-full bg-gradient-to-r from-transparent via-[#93a8ac]/70 to-transparent md:my-20" />

        <Education />

        <div className="my-16 h-[2px] w-full rounded-full bg-gradient-to-r from-transparent via-[#93a8ac]/70 to-transparent md:my-20" />

        <SkillsCertification />
      </main>

      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
