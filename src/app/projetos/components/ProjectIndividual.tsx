import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { IProject } from "@/data/Projects";
import Image from "next/image";

const ProjectIndividual = (proj: IProject) => {
  return (
    <div className="flex flex-col md:flex-row gap-12 justify-center items-start p-2">
      <div className="flex flex-col gap-3 justify-start max-w-[422px]">
        <h3 className="text-2xl md:text-3xl font-semibold mb-3">
          {proj.title}
          <p className="text-sm font-light">
            data de lançamento: {proj.releaseDate}
          </p>
        </h3>
        <p>{proj.description}</p>
        {proj.link && (
          <p>
            Link:{" "}
            <a
              target="_blank"
              href={proj.link}
              className="text-primary underline"
            >
              {proj.link}
            </a>
          </p>
        )}
        {proj.repository && (
          <p>
            Repositorio:{" "}
            <a
              target="_blank"
              href={proj.repository}
              className="text-primary underline"
            >
              {proj.repository}
            </a>
          </p>
        )}
        <div className="flex text-sm gap-4 flex-wrap">
          {proj.techs.map((tec, x) => (
            <span key={x} className="p-2 bg-primary text-white rounded">
              {tec}
            </span>
          ))}
        </div>
      </div>
      <div className="w-full md:w-[500px] h-auto">
        <Carousel className="w-full overflow-hidden">
          <CarouselContent className="flex max-h-[282px] ">
            {proj.imgs.map((src, index) => (
              <CarouselItem
                key={index}
                className="flex-shrink-0 w-full h-fit md:max-h-[282px] "
              >
                <Image
                  src={src}
                  alt={`Project Image ${index + 1}`}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default ProjectIndividual;
