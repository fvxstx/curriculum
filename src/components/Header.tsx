"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import { VscChromeClose } from "react-icons/vsc";
import Modal from "./Modal";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex w-full justify-between p-6">
      <div className="flex gap-3 items-center justify-center">
        <div className="rounded-full w-8 h-8 bg-secondary"></div>
        <h1 className="font-bold text-xl">
          Fausto Torres <span className="font-light text-base">Developer</span>
        </h1>
      </div>
      <nav className="md:block hidden">
        <ul className="flex justify-around gap-6 text-lg">
          <li>
            <a href="/curriculo">Currículo</a>
          </li>
          <li>
            <div className="bg-foreground w-[2px] h-6"></div>
          </li>
          <li>
            <a href="/projeto">Projeto</a>
          </li>
          <li>
            <div className="bg-foreground w-[2px] h-6"></div>
          </li>
          <li>
            <a href="/contato">Currículo</a>
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
            <a href="/contato">Currículo</a>
          </li>
        </ul>
      </nav>
    </Modal>
  );
};

export default Header;
