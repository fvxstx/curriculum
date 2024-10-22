import { FaLinkedinIn, FaSpotify } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";

const Footer = () => {
  return (
    <footer className="w-full md:absolute md:bottom-0 p-6">
      <div className="w-full h-[1px] bg-[#c7c7c7] my-8"></div>
      <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between">
        <div>
          <p className="font-bold text-xl">Telefone</p>
          <p>+55 (71) 99974-9949</p>
        </div>
        <div>
          <p className="font-bold text-xl">Email</p>
          <p>faut.btorres@gmail.com</p>
        </div>
        <div>
          <p className="font-bold text-xl">Me siga</p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/fvxstx" target="_blank">
              <FaLinkedinIn
                href="https://www.linkedin.com/in/fvxstx"
                className="w-full h-7"
              />
            </a>
            <a
              href="https://open.spotify.com/user/12165681669?si=1218f9b3e36d43d2"
              target="_blank"
            >
              <FaSpotify className="w-full h-7" />
            </a>
            <a href="https://github.com/fvxstx" target="_blank">
              <VscGithub className="w-full h-7" />
            </a>
          </div>
        </div>
        <div>
          <p>Políticas de Cookies</p>
          <p>Políticas de Privacidade</p>
          <p>© 2024 Por Fausto Torres.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
