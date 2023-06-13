"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"

import { SearchManufacturer } from "."

const SearchButton = ({
   buttonProps
}: { buttonProps: string }) => (
   <button
      type="submit"
      className={`${buttonProps} -ml-3 z-10`}
   >
      <Image
         src="/magnifying-glass.svg"
         alt="search button"
         height={40}
         width={40}
         className="object-contain"
      />
   </button>
)

const SearchBar = () => {
   const [manufacturer, setManufacturer] = useState("")
   const [model, setModel] = useState("")

   const Router = useRouter()

   const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (manufacturer === "" || model === "")
         return alert("Please select a manufacturer and a model.")

      updateSearchParams(manufacturer.toLowerCase(), model.toLowerCase())
   }

   const updateSearchParams = (manufacturer: string, model: string) => {
      const searchParams = new URLSearchParams(window.location.search)

      if (manufacturer) searchParams.set("manufacturer", manufacturer)
      else searchParams.delete("manufacturer")

      if (model) searchParams.set("model", model)
      else searchParams.delete("model")

      const newPathName = `${window.location.pathname}?${searchParams.toString()}`

      Router.push(newPathName)
   }

   return (
      <form
         className="searchbar"
         onSubmit={handleSearch}
      >
         <div className="searchbar__item">
            <SearchManufacturer
               manufacturer={manufacturer}
               setManufacturer={setManufacturer}
            />
         </div>

         <div className="searchbar__item">
            <Image
               src="/model-icon.png"
               alt="car model"
               height={25}
               width={25}
               className="absolute h-[20px] w-[20px] ml-4 object-contain"
            />

            <input
               type="text"
               name="model"
               value={model}
               placeholder="Golf"
               onChange={(e) => setModel(e.target.value)}
               className="searchbar__input"
            />

            <SearchButton buttonProps="sm:hidden" />
         </div>

         <SearchButton buttonProps="max-sm:hidden" />
      </form>
   )
}

export default SearchBar
