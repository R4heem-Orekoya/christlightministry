import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import Wrapper from "./Wrapper"
import { HiChevronRight } from "react-icons/hi2";

const About = () => {
   return (
      <Wrapper className="py-20">
         <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto p-5">
            <div className="flex flex-col justify-center gap-4">
               <SectionHeader>THE LITTLE CHURCH WITH A BIG HEART</SectionHeader>
               <p className="text-zinc-600">
                  Lorem ipsum dolor sit amet consectetur 
                  adipisicing elit. Inventore atque, obcaecati 
                  cum aliquid corrupti ratione possimus in 
                  voluptates architecto commodi, dolore eum 
                  incidunt vitae alias veritatis ipsa consequuntur 
                  eos placeat itaque aspernatur repellendus? Nisi, 
                  pariatur ipsam.
               </p>
               <Link to='/about'>
                  <button className="bg-red-500 hover:bg-red-500 duration-500 group px-8 py-4 mt-2 w-fit text-xs flex items-center gap-1 text-white font-semibold">
                     LEARN MORE <HiChevronRight strokeWidth={0.5} size={20} className="group-hover:translate-x-2 duration-300"/>
                  </button>
               </Link>
            </div>
            <div className="aspect-[16/10] md:aspect-[4/5] border border-zinc-400"></div>
         </div>
      </Wrapper>
   )
}

export default About
