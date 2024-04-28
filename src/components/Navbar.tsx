import { Link, useLocation } from "react-router-dom"
import { cn } from "../lib/utils"
import { useEffect, useState } from "react"
import { MdMenu, MdClose } from "react-icons/md";


const NavItems = [
   {
      item: "Home",
      path: "/"
   },
   {
      item: "About",
      path: "/about"
   },
   {
      item: "Sermon",
      path: "/sermon"
   }
]

const Navbar = () => {
   const [isScrolled, setIsScrolled] = useState(false)
   const [isNavOpen, setIsNavOpen] = useState(false)
   const { pathname } = useLocation()
   
   useEffect(() => {
      const handleScroll = () => {
         if(window.scrollY > 100) {
            setIsScrolled(true)
         }else{
            setIsScrolled(false)
         }
      }
      window.addEventListener('scroll', handleScroll);
   
      return () => {
         window.removeEventListener('scroll',handleScroll);
      };
   }, [])
   
   
   return (
      <header className={cn("w-full py-6  fixed top-0 z-[100] duration-500", {"bg-black/80 backdrop-blur-lg": isScrolled})}>
         <nav className="w-[min(1200px,90%)] mx-auto flex justify-between items-center">
            <Link to='/' className="text-2xl font-semibold text-white">Logo</Link>
            
            <ul 
               className={cn(
                  "sm:flex gap-8 max-sm:absolute max-sm:top-[110%] max-sm:right-[-100%] duration-300 max-sm:w-[min(300px,90%)] max-sm:py-4 max-sm:px-6 max-sm:bg-black/60 max-sm:backdrop-blur-md max-sm:border max-sm:border-white/40 max-sm:flex-col",
                  {"max-sm:right-[5%]": isNavOpen}
                  )}>
               {NavItems.map((navItem, i) => (
                  <li 
                     key={i} 
                     className={
                        cn("text-white/60 text-lg hover:text-white max-sm:py-2", 
                           {"font-bold text-white": pathname === navItem.path}
                        )
                     }>
                     <Link to={navItem.path}>{navItem.item}</Link>
                  </li>
               ))}
            </ul>
            
            <button 
               onClick={() => {
                  setIsNavOpen(!isNavOpen)
               }}
               className="text-white sm:hidden">
               <MdClose size={30} className={cn("hidden", {"block": isNavOpen})}/>
               <MdMenu size={30} className={cn({"hidden": isNavOpen})}/>
            </button>
         </nav>
      </header>
   )
}

export default Navbar
