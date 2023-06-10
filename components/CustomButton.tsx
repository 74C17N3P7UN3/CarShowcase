"use client"

import { CustomButtonProps } from "@/types"

const CustomButton = ({
   title,
   btnType,
   containerStyles,
   handleClick
}: CustomButtonProps) => (
   <button
      disabled={false}
      onClick={handleClick}
      type={btnType}
      className={`custom-btn ${containerStyles}`}
   >
      <span className={`flex-1`}>
         {title}
      </span>
   </button>
)

export default CustomButton
