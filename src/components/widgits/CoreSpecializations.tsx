import Wrapper from "@/components/shared/Wrapper";
import Button from "@/components/shared/Button";

export const CoreSpecializations = () => {
  return (
    <section className="mt-28">
      <Wrapper>
        <div>
          <div>
            <h3 className="text-teal-700 font-bold">Program of Studies</h3>
            <h1 className="text-gray-800 font-bold md:text-5xl text-4xl mt-4">Core Courses <br /> (Common in All Specializations)</h1>
            <p className="mt-5 text-gray-500 font-medium text-xl">Every participant of the program will start by completing the following three core courses.</p>
            <div className="mt-8">
              <Button text="Enrolled Now" />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
export default CoreSpecializations;
