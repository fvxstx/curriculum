"use client";

import { RxHamburgerMenu } from "react-icons/rx";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import SwitchLanguages from "./SwitchLanguages";
import { Link, usePathname } from "@/i18n/navigation";
import ModalNav from "./ModalNav";

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const locate = useLocale();
  const textLang = useTranslations("Header");

  const isActive = (path: string) => pathname === path;

  return (
    <header className="flex w-full justify-between p-6 max-w-[1400px]">
      <a className="flex gap-3 items-center justify-center" href="/">
        <div className="rounded-full w-8 h-8 bg-secondary hidden md:block"></div>
        <h1 className="font-bold text-xl max-w-40 md:max-w-full">
          Fausto Torres{" "}
          <span className="font-light text-base">- Scientist</span>
        </h1>
      </a>
      <div className="hidden md:flex items-center gap-6 justify-center">
        <SwitchLanguages />
        <nav>
          <ul className="flex justify-around text-lg">
            <li
              className={`pr-3 mr-2 border-r-2 border-foreground ${
                isActive("/curriculo") ? " text-secondary" : ""
              }`}
            >
              <Link locale={locate} href="/curriculo">
                {textLang("button1")}
              </Link>
            </li>
            <li
              className={`pr-3 mr-2 border-r-2 border-foreground ${
                isActive("/projetos") ? " text-secondary" : ""
              }`}
            >
              <Link locale={locate} href="/projetos">
                {textLang("button2")}
              </Link>
            </li>
            <li
              className={`pr-3${isActive("/contato") ? " text-secondary" : ""}`}
            >
              <Link href="/contato" locale={locate}>
                {textLang("button3")}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex md:hidden items-center gap-6 justify-center">
        <SwitchLanguages />
        <button onClick={() => setOpen(!open)}>
          <RxHamburgerMenu className="h-7 w-full" />
        </button>
      </div>
      <ModalNav open={open} handleClose={() => setOpen(!open)} />
    </header>
  );
};

export default Header;
