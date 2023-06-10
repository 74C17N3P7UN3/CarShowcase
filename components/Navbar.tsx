import Image from "next/image"
import Link from "next/link"

import { CustomButton } from "."

const Navbar = () => (
   <header className="absolute w-full z-10">
      <nav className="flex items-center justify-between max-w-[1440px] mx-auto sm:px-16 px-6 py-4">
         <Link href="/" className="flex items-center justify-center">
            <Image
               src="/logo.svg"
               alt="logo"
               height={18}
               width={118}
               className="object-contain"
            />
         </Link>

         <CustomButton
            title="Sign In"
            btnType="button"
            containerStyles="min-w-[130px] bg-white text-primary-blue rounded-full"
         />
      </nav>
   </header>
)

export default Navbar
