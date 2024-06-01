import Link from "next/link";
import img from "/publuc/logo.webp";
import Image from "next/image";
import Wrapper from "@/components/shared/Wrapper";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white opacity-95">
      <Wrapper>
        <div className="flex justify-between mt-6">
          <div className="">
            <Image src="/logo.webp" width={90} height={400} alt="Panaverse Logo" />
          </div>
          <div className="">
            <ul className="flex gap-x-6 font-semibold mt-5">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/Course"}>Course</Link>
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
