"use client";

import Wrapper from "@/components/shared/Wrapper";
import wmdImg from "@/app/assits/metaverse.webp";
import aiImg from "@/app/assits/ai.webp";
import cloudImg from "@/app/assits/cloud.webp";
import AmbientImg from "@/app/assits/ambient.webp";
import GenomicsImg from "@/app/assits/genomics.webp";
import NetworkImg from "@/app/assits/network.webp";
import { useState } from "react";
import Quarter from "@/components/shared/Quarter";
import { it } from "node:test";
import Image from "next/image";

const CourseTrack = [
  {
    slug: "wmd",
    header: "Web 3.0 (Blockchain) and Metaverse Specialization",
    description:
      "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image: wmdImg,
    quarter: [
      {
        headers: "Quarter IV",
        description:
          "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
        number: "4",
      },
      {
        headers: "Quarter V",
        description:
          "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
        number: "5",
      },
    ],
  },
  {
    slug: "AI",
    header: "Artificial Intelligence (AI) and Deep Learning Specialization",
    description:
      "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
    image: aiImg,
    quarter: [
      {
        headers: "Quarter IV",
        description:
          "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
        number: "4",
      },
      {
        headers: "Quarter V",
        description: "AI-361: Deep Learning and MLOps",
        number: "5",
      },
    ],
  },
  {
    slug: "cloud",
    header: "Cloud-Native Computing Specialization",
    description:
      "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
    image: cloudImg,
    quarter: [
      {
        headers: "Quarter IV",
        description:
          "CN-351: Certified Kubernetes Application Developer (CKAD)",
        number: "4",
      },
      {
        headers: "Quarter V",
        description:
          "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
        number: "5",
      },
    ],
  },
  {
    slug: "Ambient",
    header: "Ambient Computing and IoT Specialization",
    description:
      "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
    image: AmbientImg,
    quarter: [
      {
        headers: "Quarter IV",
        description:
          "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
        number: "4",
      },
      {
        headers: "Quarter V",
        description: "AC-361: Embedded Programming using C and Rust",
        number: "5",
      },
    ],
  },
  {
    slug: "Genomics",
    header: "Genomics and Bioinformatics Specialization",
    description:
      "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
    image: GenomicsImg,
    quarter: [
      {
        headers: "Quarter IV",
        description: "Bio-351: Python for Biologist",
        number: "4",
      },
      {
        headers: "Quarter V",
        description: "Bio-361: Bioinformatics with Python",
        number: "5",
      },
    ],
  },
  {
    slug: "Network",
    header: "Network Programmability and Automation Specialization",
    description:
      "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
    image: NetworkImg,
    quarter: [
      {
        headers: "Quarter IV",
        description: "NPA-351: CCNA 200-301 Certification",
        number: "4",
      },
      {
        headers: "Quarter V",
        description: "NPA-361: Network Programmability and Automation",
        number: "5",
      },
    ],
  },
];

const SpecializationCourseTrack = () => {
  const [selectItem, setSelectItem] = useState("wmd");
  const selectedItemData = CourseTrack.find(
    (items) => items.slug === selectItem
  );
  return (
    <section className="mt-3 md:mt-12">
      <Wrapper>
        <div className="mt-10 flex flex-col-reverse lg:flex-row gap-x-6 gap-y-8">
          <div className="basis-8/12 shadow-xl sticky top-28 self-start rounded-xl border border-slate-200 py-8 px-6">
            <h3 className="text-teal-700 font-bold text-xl">
              Specialized Track
            </h3>
            <h1 className="text-gray-800 font-bold md:text-4xl text-3xl mt-6">
              {selectedItemData?.header}
            </h1>
            <p className="mt-8 text-gray-500 font-medium text-xl">
              {selectedItemData?.description}
            </p>
            <button className="mt-6 border border-teal-800 underline text-teal-800 px-3 py-3 text-2xl font-medium rounded-md hover:shadow-xl">
              Learn More <span>➡️</span>
            </button>
            <div className="flex flex-col md:flex-row gap-4 mt-8 border-none">
              {selectedItemData?.quarter.map((items) => (
                <Quarter
                  key={items.number}
                  header={items.headers}
                  description={items.description}
                  number={items.number}
                  haveBorder={false}
                />
              ))}
            </div>
          </div>
          <div className="px-4 space-y-4 md:space-y-6 py-6 basis-4/12 flex-1">
            {CourseTrack.map((items, i) => (
              <div onClick={() => setSelectItem (items.slug)}
              key={items.slug}
              className="flex items-center cursor-pointer gap-x-6">
                <div className="flex-shrink-0 h-36 w-36">
                  <Image src={items.image} alt={items.header} className={"h-36 object-cover rounded-md"}/>
                </div>
                <div>
                <h4 className="text-teal-700 font-medium">Specialized Track</h4>
                <h3 className="text-lg font-semibold">{items.header}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
export default SpecializationCourseTrack;
