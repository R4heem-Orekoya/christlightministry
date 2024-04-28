import Wrapper from "./Wrapper"
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";

const Footer = () => {
   return (
      <footer className="bg-zinc-800 py-20 text-white text-center">
         <Wrapper>
            <h2 className="text-3xl font-bold">Logo</h2>
            <ul className="max-w-lg mx-auto mt-6 flex justify-center items-center gap-4">
               <li>
                  <a href="#"><FaFacebook size={30}/></a>
               </li>
               <li>
                  <a href="#"><FaXTwitter size={30}/></a>
               </li>
               <li>
                  <a href="#"><FaInstagram size={30}/></a>
               </li>
               <li>
                  <a href="#"><FaYoutube size={30}/></a>
               </li>
            </ul>
            <p className="text-xs mt-12">© 2024 CHRIST LIGHT MINISTRY</p>
         </Wrapper>
      </footer> 
   )
}

export default Footer
