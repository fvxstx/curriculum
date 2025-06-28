"use client";
import { VscChromeClose } from "react-icons/vsc";
import Modal from "./Modal";
import { Link, usePathname } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

const ModalNav = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  const pathname = usePathname();
  const locate = useLocale();
  const isActive = (path: string) => pathname === path;
  const textLang = useTranslations("Header");

  return (
    <Modal isOpen={open} onClose={handleClose}>
      <button className="w-full flex justify-end" onClick={handleClose}>
        <VscChromeClose size={30} />
      </button>
      <nav className="h-1/2">
        <ul className="flex flex-col justify-center items-center gap-10 text-2xl h-full">
          <li>
            <Link
              href="/curriculo"
              locale={locate}
              className={`${isActive("/curriculo") ? " text-secondary" : ""}`}
            >
              {textLang("button1")}
            </Link>
          </li>
          <li>
            <Link
              href="/projetos"
              locale={locate}
              className={`${isActive("/projetos") ? " text-secondary" : ""}`}
            >
              {textLang("button2")}
            </Link>
          </li>
          <li>
            <Link
              href="/contato"
              locale={locate}
              className={`${isActive("/contato") ? " text-secondary" : ""}`}
            >
              {textLang("button3")}
            </Link>
          </li>
        </ul>
      </nav>
    </Modal>
  );
};

export default ModalNav;
