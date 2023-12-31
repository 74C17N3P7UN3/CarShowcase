import { MouseEventHandler } from "react"

export interface CardDetailsProps {
   car: CarProps
   isOpen: boolean
   closeModal: () => void
}

export interface CarProps {
   city_mpg: number
   class: string
   combination_mpg: number
   cylinders: number
   displacement: number
   drive: string
   fuel_type: string
   highway_mpg: number
   make: string
   model: string
   transmission: string
   year: number
}

export interface CustomButtonProps {
   title: string
   btnType: "button" | "submit"
   containerStyles?: string
   textStyles?: string
   rightIcon?: string
   handleClick?: MouseEventHandler<HTMLButtonElement>
   isDisabled?: boolean
}

export interface CustomFilterProps {
   title: string
   options: OptionProps[]
}

export interface FilterProps {
   limit: number
   manufacturer: string
   model: string
   fuel: string
   year: number
}

export interface OptionProps {
   title: string
   value: string
}

export interface SearchManufacturerProps {
   manufacturer: string
   setManufacturer: (manufacturer: string) => void
}

export interface ShowMoreProps {
   pageNumber: number
   outOfCars: boolean
}
