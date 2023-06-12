import { CarCard, CustomFilter, Hero, SearchBar } from "@/components"
import { fetchCars } from "@/utils"

const Home = async () => {

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
                  <CustomFilter title="fuel" />
                  <CustomFilter title="year" />
               </div>
            </div>

         </div>
      </main>
   )
}

export default Home
