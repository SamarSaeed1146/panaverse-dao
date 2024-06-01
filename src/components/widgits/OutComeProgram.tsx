import Wrapper from "@/components/shared/Wrapper";
import outComeImg from "@/app/assits/outcome-poster.webp";
import Image from "next/image";

const outComePoints = [
  "Product Ownership",
  "Freelacing",
  "Global Marketing by Panaverse DAO",
  "Boosting Economy",
];

const OutComeProgram = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex flex-col-reverse md:flex-row mt-20 gap-x-20">
          <div className="flex-1 mt-12 md:mt-0">
            <Image src={outComeImg} width={600} alt="Program Icon" />
          </div>
          <div className="flex-1 mt-8">
            <h1 className="text-gray-800 font-bold lg:text-[44px] md:text-[38px] text-[30px] mt-4">
              The Outcome for Participants of the Program
            </h1>
            <p className="mt-5 text-gray-500 font-medium text-base md:text-xl">
              As a graduate of this program, you will own valuable products such
              as Full-Stack App Templates, AR and VR Experiences, and APIs that
              are marketed globally by the Panaverse DAO. You will also have the
              opportunity to offer your services at a rate of $50 per hour,
              providing a path to financial stability while contributing to the
              growth of Pakistan's software exports.
            </p>
            <div className="grid grid-cols-2 mt-8 gap-y-8 gap-x-12">
              {outComePoints.map((items, i) => (
                <div key={i} className="flex items-center gap-y-6 gap-x-2">
                  <svg
                    className="flex-shrink-0 flex-none h-8 w-8 xs:h-10 xs:w-10"
                    width="46"
                    height="46"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.3431 5.65686C23.4673 2.53266 28.5327 2.53266 31.6569 5.65685L46.3431 20.3431C49.4673 23.4673 49.4673 28.5327 46.3431 31.6569L31.6569 46.3431C28.5327 49.4673 23.4673 49.4673 20.3431 46.3431L5.65686 31.6569C2.53266 28.5327 2.53266 23.4673 5.65685 20.3431L20.3431 5.65686Z"
                      fill="url(#paint0_radial_35_416)"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17 24.9206C19.0707 25.3461 21.734 26.1698 23.75 27.465C26.1178 24.3345 30.371 21.406 35 19C30.6042 23.2739 26.9668 28.1236 24.5 33C22.5118 30.2129 20.3398 27.6189 17 24.9206Z"
                      fill="white"
                    ></path>
                    <defs>
                      <radialGradient
                        id="paint0_radial_35_416"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(16.5455 -6.96429) rotate(59.1918) scale(77.3011 169.686)"
                      >
                        <stop offset="0.125" stopColor="#00E1F0"></stop>
                        <stop offset="1" stopColor="#00616C"></stop>
                      </radialGradient>
                    </defs>
                  </svg>
                  <div className="max-w-sm font-medium md:text-lg">{items}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default OutComeProgram;
