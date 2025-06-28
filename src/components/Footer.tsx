'use client"';
import { useTranslations } from "next-intl";
import { FaLinkedinIn, FaSpotify } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";

const Footer = () => {
  const textLang = useTranslations("Footer");

  return (
    <footer className="w-full  p-6">
      <div className="w-full h-[1px] bg-[#c7c7c7] my-8"></div>
      <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between">
        <div>
          <p className="font-bold text-xl mb-2">{textLang("contactNumber")}</p>
          <p>+55 (71) 99974-9949</p>
        </div>
        <div>
          <p className="font-bold text-xl mb-2">E-mail</p>
          <p>faut.btorres@gmail.com</p>
        </div>
        <div>
          <p className="font-bold text-xl mb-2">{textLang("socialMedia")}</p>
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
          <p>{textLang("politicyCookies")}</p>
          <p>{textLang("politicyPrivacy")}</p>
          <p>© 2025 {textLang("for")} Fausto Torres</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
