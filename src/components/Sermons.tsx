import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import Wrapper from "./Wrapper"
import { HiChevronRight } from "react-icons/hi2";

const Sermons = () => {
   return (
      <Wrapper className="py-20">
         <SectionHeader className="text-center">OUR LATEST SERMONS</SectionHeader>
            
         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {[1,1,2,3,1,3].map((_, i) => (
               <div key={i} className="col-span-1 aspect-video border border-zinc-400"></div>
            ))}
         </div>
         
         <Link to='/sermon'>
            <button className="bg-red-500 hover:bg-red-500 duration-500 group px-8 py-4 w-fit text-xs flex items-center gap-1 text-white font-semibold mx-auto mt-10">
               SEE MORE <HiChevronRight strokeWidth={0.5} size={20} className="group-hover:translate-x-2 duration-300"/>
            </button>
         </Link>
      </Wrapper>
   )
}

export default Sermons
