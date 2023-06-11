"use client"

import Image from "next/image"

import { CustomButtonProps } from "@/types"

const CustomButton = ({
   title,
   btnType,
   containerStyles,
   textStyles,
   rightIcon,
   handleClick,
   isDisabled
}: CustomButtonProps) => (
   <button
      disabled={false}
      onClick={handleClick}
      type={btnType}
      className={`custom-btn ${containerStyles}`}
   >
      <span className={`flex-1 ${textStyles}`}>
         {title}
      </span>
      {rightIcon && (
         <div className="relative h-6 w-6">
            <Image
               src={rightIcon}
               alt="right icon"
               fill
               className="object-contain"
            />
         </div>
      )}
   </button>
)

export default CustomButton
