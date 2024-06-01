import Wrapper from "@/components/shared/Wrapper";
import { Button } from "@/components/shared/Button";
import assit from "@/app/assits/hero-poster.webp";
import Image from "next/image";

export const CoreTrack = () => {
  return (
    <section className="mt-10">
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 md:mt-12">
            <h3 className="text-teal-700 font-bold max-w-screen-sm text-xl">
              Presidential Initiative for Artificial Intelligence and Computing
              (PIAIC)
            </h3>
            <h1 className="text-gray-800 font-bold xl:text-5xl md:text-4xl text-3xl max-w-screen-sm mt-4">
              Certified Web 3.0 and Metaverse Developer
            </h1>
            <p className="mt-5 max-w-screen-sm text-gray-500 font-medium text-base md:text-xl">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
            </p>
            <p className="mt-5 max-w-screen-sm text-gray-500 font-medium text-base md:text-xl">
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies
            </p>
            <div className="mt-10">
              <Button text={"Learn More"} />
            </div>
          </div>
          <div className="flex-1 mt-8 md:mt-0">
            <Image src={assit} alt="Hero image" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
