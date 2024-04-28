import { ReactNode } from "react"
import { cn } from "../lib/utils"

const SectionHeader = ({ children, className } : {children: ReactNode, className?: string} ) => {
   return (
      <h2 className={cn("text-2xl sm:text-3xl font-bold text-zinc-950 text-balance", className)}>
         {children}
      </h2>
   )
}

export default SectionHeader
