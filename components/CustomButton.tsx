"use client"

import { CustomButtonProps } from "@/types"

const CustomButton = ({
   title,
   containerStyles,
   handleClick
}: CustomButtonProps) => (
   <button
      disabled={false}
      onClick={handleClick}
      type={"button"}
      className={`custom-btn ${containerStyles}`}
   >
      <span className={`flex-1`}>
         {title}
      </span>
   </button>
)

export default CustomButton
