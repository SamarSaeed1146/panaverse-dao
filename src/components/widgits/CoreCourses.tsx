import Wrapper from "@/components/shared/Wrapper";
import Quarter from "@/components/shared/Quarter";

const quarterData = [
  {
    header: "Quarter I",
    description: "CS-101: Object-Oriented Programming using TypeScript",
    number: "1",
  },
  {
    header: "Quarter II",
    description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    number: "2",
  },
  {
    header: "Quarter III",
    description: "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    number: "3",
  },
]

export const CoreCourses = () => {
  return (
    <section>
      <Wrapper>
        <div className="my-12 flex flex-col md:flex-row gap-x-8 gap-y-12">
          {quarterData.map((item, i) => (
            <Quarter
            key={item.number} 
            header={item.header}
            description={item.description}
            number={item.number}
            />
          ))}  
        </div>
      </Wrapper>
    </section>
  );
};
export default CoreCourses;