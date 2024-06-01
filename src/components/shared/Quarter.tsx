
import { FC } from "react"

interface IProps {
    header : string,
    description: string,
    number : string,
    haveBorder? : boolean,
}

export const Quarter:FC<IProps> = ( {header, description, number, haveBorder = true} ) => {
  return (
    <div className={`flex-1 md:w-4/12 border rounded-md flex flex-col relative border-gray-400 px-8 py-12 justify-center ${haveBorder && "border"}`}>
      <h4 className="text-xl font-bold ">{header}</h4>
      <p className="mt-3 text-gray-700 text-xl">{description}</p>
      <div className="text-9xl md:text-[170px] font-bold absolute top-0 -md:top-4 right-10 -z-10 text-gray-200">{number}</div>
    </div>
  )
}
export default Quarter