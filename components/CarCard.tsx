"use client"

import Image from "next/image"
import { useState } from "react"

import { CarDetails, CustomButton } from "."

import { CarCardProps } from "@/types"
import { calculateCarRent, generateCarImageUrl } from "@/utils"

const CarCard = ({
   car
}: CarCardProps) => {
   const [isOpen, setIsOpen] = useState(false)

   const { city_mpg, drive, make, model, transmission, year } = car

   const carRent = calculateCarRent(city_mpg, year)

   return (
      <div className="car-card group">
         <div className="car-card__content">
            <h2 className="car-card__content-title">
               {make} {model}
            </h2>
         </div>

         <p className="flex mt-6 text-[32px] font-extrabold">
            <span className="self-start text-[14px] font-semibold">
               $
            </span>
            {carRent}
            <span className="self-end text-[14px] font-medium">
               /day
            </span>
         </p>

         <div className="relative h-40 w-full my-3 object-contain">
            <Image
               src={generateCarImageUrl(car)}
               alt="car model"
               fill
               priority
               className="object-contain"
            />
         </div>

         <div className="relative flex w-full mt-2">
            <div className="flex justify-between group-hover:invisible w-full text-gray">
               <div className="flex flex-col items-center justify-center gap-2">
                  <Image
                     src="/steering-wheel.svg"
                     height={20}
                     width={20}
                     alt="steering wheel"
                  />

                  <p className="text-[14px]">
                     {transmission === "a" ? "Automatic" : "Manual"}
                  </p>
               </div>
               <div className="flex flex-col items-center justify-center gap-2">
                  <Image
                     src="/tire.svg"
                     height={20}
                     width={20}
                     alt="tire"
                  />

                  <p className="text-[14px]">
                     {drive.toUpperCase()}
                  </p>
               </div>
               <div className="flex flex-col items-center justify-center gap-2">
                  <Image
                     src="/gas.svg"
                     height={20}
                     width={20}
                     alt="gas"
                  />

                  <p className="text-[14px]">
                     {city_mpg} MPG
                  </p>
               </div>
            </div>

            <div className="car-card__btn-container">
               <CustomButton
                  title="View More"
                  btnType="button"
                  containerStyles="w-full py-[16px] bg-primary-blue rounded-full"
                  textStyles="leading-[17px] text-white text-[14px] font-bold"
                  rightIcon="/right-arrow.svg"
                  handleClick={() => setIsOpen(true)}
               />
            </div>
         </div>

         <CarDetails
            car={car}
            isOpen={isOpen}
            closeModal={() => setIsOpen(false)}
         />
      </div>
   )
}

export default CarCard
