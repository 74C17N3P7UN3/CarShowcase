"use client"

import { Dialog, Transition } from "@headlessui/react"
import Image from "next/image"
import { Fragment } from "react"

import { CardDetailsProps } from "@/types"
import { generateCarImageUrl } from "@/utils"

const CarDetails = ({
   car,
   isOpen,
   closeModal
}: CardDetailsProps) => (
   <Transition
      appear
      show={isOpen}
      as={Fragment}
   >
      <Dialog
         as="div"
         onClose={closeModal}
         className="relative z-10"
      >
         <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
         >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
         </Transition.Child>

         <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
               <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
               >
                  <Dialog.Panel className="relative flex flex-col gap-5 max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 bg-white shadow-xl rounded-2xl text-left transform transition-all">
                     <button
                        type="button"
                        onClick={closeModal}
                        className="absolute top-2 right-2 w-fit p-2 bg-primary-blue-100 rounded-full z-10"
                     >
                        <Image
                           src="/close.svg"
                           alt="close"
                           height={20}
                           width={20}
                           className="object-contain"
                        />
                     </button>

                     <div className="flex flex-1 flex-col gap-3">
                        <div className="relative h-40 w-full bg-pattern bg-center bg-cover rounded-lg">
                           <Image
                              src={generateCarImageUrl(car)}
                              alt="car model"
                              fill
                              priority
                              className="object-contain"
                           />
                        </div>

                        <div className="flex gap-3">
                           <div className="relative flex-1 h-24 w-full bg-primary-blue-100 rounded-lg">
                              <Image
                                 src={generateCarImageUrl(car, "29")}
                                 alt="car model"
                                 fill
                                 priority
                                 className="object-contain"
                              />
                           </div>
                           <div className="relative flex-1 h-24 w-full bg-primary-blue-100 rounded-lg">
                              <Image
                                 src={generateCarImageUrl(car, "33")}
                                 alt="car model"
                                 fill
                                 priority
                                 className="object-contain"
                              />
                           </div>
                           <div className="relative flex-1 h-24 w-full bg-primary-blue-100 rounded-lg">
                              <Image
                                 src={generateCarImageUrl(car, "13")}
                                 alt="car model"
                                 fill
                                 priority
                                 className="object-contain"
                              />
                           </div>
                        </div>
                     </div>

                     <div className="flex flex-1 flex-col gap-2">
                        <h2 className="text-xl font-semibold capitalize">
                           {car.make} {car.model}
                        </h2>

                        <div className="flex flex-wrap gap-4 mt-3">
                           {Object.entries(car).map(([key, value]) => (
                              <div className="flex justify-between gap-5 w-full text-right" key={key}>
                                 <h4 className="text-grey capitalize">{key.split("_").join(" ")}</h4>
                                 <p className="text-black-100 font-semibold">{value}</p>
                              </div>
                           ))}
                        </div>
                     </div>
                  </Dialog.Panel>
               </Transition.Child>
            </div>
         </div>
      </Dialog>
   </Transition>
)

export default CarDetails
