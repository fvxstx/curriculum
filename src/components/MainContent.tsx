const MainContent = () => {
  return (
    <main className="flex flex-col-reverse md:flex-row gap-12 w-full items-center justify-center mt-4 md:mt-32 p-6">
      <div className="w-[19rem] h-[19rem] sm:w-[26rem] sm:h-[26rem] rounded-full">
        <img
          src="/me.jpg"
          alt="profile foto"
          className="w-full h-full rounded-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-6xl mb-6">Salve!</h2>
        <p className="font-semibold text-xl">Um pouco sobre mim</p>
        <p className="w-72 sm:w-96 font-thin">
          Sou um desenvolvedor FullStack. Fluente em inglês, graduando Ciência
          da Computação pela Faculdade Descomplica, com vivências de trabalho
          internacional. Vivendo o agora!
        </p>
        <div>
          <ul className="text-black font-bold text-lg md:text-xl flex justify-center items-center gap-2 md:gap-4 mt-4">
            <li className="bg-primary p-4 w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center rounded-full border border-black cursor-pointer">
              <a href="curriculo">Currículo</a>
            </li>
            <li className="bg-secondary p-4 w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center rounded-full border border-black cursor-pointer">
              <a href="projeto">Projetos</a>
            </li>
            <li className="bg-thirth p-4 w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center rounded-full border border-black cursor-pointer">
              <a href="contato">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
