"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import { VscChromeClose } from "react-icons/vsc";
import Modal from "./Modal";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex w-full justify-between p-6 max-w-[1400px]">
      <a className="flex gap-3 items-center justify-center" href="/">
        <div className="rounded-full w-8 h-8 bg-secondary"></div>
        <h1 className="font-bold text-xl">
          Fausto Torres <span className="font-light text-base">Developer</span>
        </h1>
      </a>
      <nav className="md:block hidden">
        <ul className="flex justify-around  text-lg">
          <li className="pr-3 mr-2 border-r-2 border-foreground">
            <a href="/curriculo" className="hover:text-hover-foreground  ">
              Currículo
            </a>
          </li>
          <li className="pr-3 mr-2 border-r-2 border-foreground">
            <a href="/projeto" className="hover:text-hover-foreground">
              Projetos
            </a>
          </li>

          <li>
            <a href="/contato" className="hover:text-hover-foreground">
              Contato
            </a>
          </li>
        </ul>
      </nav>
      <button onClick={() => setOpen(!open)} className="md:hidden block">
        <RxHamburgerMenu className="h-7 w-full" />
      </button>
      <ModalNav open={open} handleClose={() => setOpen(!open)} />
    </header>
  );
};

const ModalNav = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  return (
    <Modal isOpen={open} onClose={handleClose}>
      <button className="w-full flex justify-end" onClick={handleClose}>
        <VscChromeClose size={30} />
      </button>
      <nav className="h-1/2">
        <ul className="flex flex-col justify-center items-center gap-10 text-2xl h-full">
          <li>
            <a href="/curriculo">Currículo</a>
          </li>

          <li>
            <a href="/projeto">Projeto</a>
          </li>

          <li>
            <a href="/contato">Contato</a>
          </li>
        </ul>
      </nav>
    </Modal>
  );
};

export default Header;
