import {
   CarCard,
   CustomFilter,
   Hero,
   SearchBar,
   ShowMore
} from "@/components"
import { fuels, yearsOfProduction } from "@/constants"
import { FilterProps } from "@/types"
import { fetchCars } from "@/utils"

const Home = async ({ searchParams }: { searchParams: FilterProps }) => {
   const allCars = await fetchCars({
      limit: searchParams.limit || 8,
      manufacturer: searchParams.manufacturer || "",
      model: searchParams.model || "",
      fuel: searchParams.fuel || "",
      year: searchParams.year || 2023,
   })

   const isDataEmpty =
      !Array.isArray(allCars)
      || allCars.length === 0
      || !allCars

   return (
      <main className="overflow-hidden">
         <Hero />
         <div className="max-width mt-12 padding-x padding-y" id="discover">
            <div className="home__text-container">
               <h1 className="text-4xl font-extrabold">
                  Car Catalogue
               </h1>
               <p>Explore a collection of cars you might like</p>
            </div>

            <div className="home__filters">
               <SearchBar />

               <div className="home__filter-container">
                  <CustomFilter title="fuel" options={fuels} />
                  <CustomFilter title="year" options={yearsOfProduction} />
               </div>
            </div>

            {!isDataEmpty ? (
               <section>
                  <div className="home__cars-wrapper">
                     {allCars?.map((car, idx) => <CarCard car={car} key={idx} />)}
                  </div>

                  <ShowMore
                     pageNumber={(searchParams.limit || 8) / 8}
                     outOfCars={(searchParams.limit || 8) > allCars.length}
                  />
               </section>
            ) : (
               <div className="home__error-container">
                  <h2 className="text-xl text-black font-bold">
                     Oops, no results!
                  </h2>
                  <p>{allCars?.message}</p>
               </div>
            )}
         </div>
      </main>
   )
}

export default Home
