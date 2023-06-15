"use client"

import { useRouter } from "next/navigation"

import { ShowMoreProps } from "@/types"
import CustomButton from "./CustomButton"
import { updateSearchParams } from "@/utils"

const ShowMore = ({
   pageNumber,
   outOfCars
}: ShowMoreProps) => {
   const router = useRouter()

   const handleNavigation = () => {
      const newLimit = (pageNumber + 1) * 8
      const newPathName = updateSearchParams("limit", `${newLimit}`)

      router.push(newPathName)
   }

   return (
      <div className="flex-center gap-5 w-full mt-10">
         {!outOfCars && (
            <CustomButton
               title="Show More"
               btnType="button"
               containerStyles="bg-primary-blue text-white rounded-full"
               handleClick={handleNavigation}
            ></CustomButton>
         )}
      </div>
   )
}

export default ShowMore
