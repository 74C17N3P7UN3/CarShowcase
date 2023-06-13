import { CarCard, CustomFilter, Hero, SearchBar } from "@/components"
import { fetchCars } from "@/utils"

const Home = async () => {
   const allCars = await fetchCars()

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
                  <CustomFilter title="Fuel" />
                  <CustomFilter title="Year" />
               </div>
            </div>

            {!isDataEmpty ? (
               <section>
                  <div className="home__cars-wrapper">
                     {allCars?.map((car) => <CarCard car={car} />)}
                  </div>
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
