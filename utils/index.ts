import { CarProps, FilterProps } from "@/types"

export const calculateCarRent = (city_mpg: number, year: number) => {
   const basePricePerDay = 50 // Base rental price per day in dollars
   const mileageFactor = 0.1 // Additional rate per mile driven
   const ageFactor = 0.05 // Additional rate per year of vehicle age

   // Calculate additional rate based on mileage and age
   const mileageRate = city_mpg * mileageFactor
   const ageRate = (new Date().getFullYear() - year) * ageFactor

   // Calculate total rental rate per day
   const rentalRatePerDay = basePricePerDay + mileageRate + ageRate

   return rentalRatePerDay.toFixed(0)
}

export const fetchCars = async (filters: FilterProps) => {
   const options = {
      method: "GET",
      headers: {
         "X-RapidAPI-Key": process.env.RAPID_API_KEY || "",
         "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com"
      }
   }

   const url = new URL("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars")

   const { limit, manufacturer, model, fuel, year } = filters

   url.searchParams.append("limit", `${limit}`)
   url.searchParams.append("make", manufacturer)
   url.searchParams.append("model", model)
   url.searchParams.append("fuel_type", fuel)
   url.searchParams.append("year", `${year}`)

   const response = await fetch(url.toString(), options)
   return await response.json()
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
   const url = new URL("https://cdn.imagin.studio/get-image")

   const { make, model, year } = car

   url.searchParams.append("customer", "hrjavascript-mastery")
   url.searchParams.append("make", make)
   url.searchParams.append("modelFamily", model.split(' ')[0])
   url.searchParams.append("zoomType", "fullscreen")
   url.searchParams.append("modelYear", `${year}`)
   url.searchParams.append("angle", `${angle}`)

   return url.toString()
}

export const updateSearchParams = (type: string, value: string) => {
   const searchParams = new URLSearchParams(window.location.search)

   searchParams.set(type, value)

   return `${window.location.pathname}?${searchParams.toString()}`
}
