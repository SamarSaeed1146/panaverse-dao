import { FC } from "react"


export const Button:FC<{ text : string }> = ({text}) => {
  return (
    <button className="bg-[#00616C] text-white px-4 md:px-6 py-2 md:py-3 text-lg md:text-xl font-medium rounded-full hover:shadow-xl hover:scale-105 duration-300">{text}</button>
  )
}
export default Button