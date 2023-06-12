"use client"

import { Combobox, Transition } from "@headlessui/react"
import Image from "next/image"
import { Fragment, useState } from "react"

import { manufacturers } from "@/constants"
import { SearchManufacturerProps } from "@/types"

const SearchManufacturer = ({
   manufacturer,
   setManufacturer
}: SearchManufacturerProps) => {
   const [query, setQuery] = useState("")

   const formattedQuery = (inputQuery: string) => {
      return inputQuery
         .toLowerCase()
         .replace(/\s+/g, "")
   }

   const filteredManufacturers =
      query === ""
         ? manufacturers
         : manufacturers.filter((item) => (
            formattedQuery(item).includes(formattedQuery(query))
         ))

   return (
      <div className="search-manufacturer">
         <Combobox
            value={manufacturer}
            onChange={setManufacturer}
         >
            <div className="relative w-full">
               <Combobox.Button className="absolute top-[14px]">
                  <Image
                     src="/car-logo.svg"
                     alt="car logo"
                     height={20}
                     width={20}
                     className="ml-4"
                  />
               </Combobox.Button>

               <Combobox.Input
                  className="search-manufacturer__input"
                  displayValue={(manufacturer: string) => manufacturer}
                  placeholder="Volkswagen"
                  onChange={(e) => setQuery(e.target.value)}
               />

               <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  afterLeave={() => setQuery("")}
               >
                  <Combobox.Options>
                     {filteredManufacturers.map((item) => (
                        <Combobox.Option
                           key={item}
                           value={item}
                           className={({ active }) => `search-manufacturer__option relative ${active ? "bg-primary-blue text-white" : "text-gray-900"}`}
                        >
                           {item}
                        </Combobox.Option>
                     ))}
                  </Combobox.Options>
               </Transition>
            </div>
         </Combobox>
      </div>
   )
}

export default SearchManufacturer
