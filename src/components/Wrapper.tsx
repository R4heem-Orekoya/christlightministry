import { ReactNode } from "react"
import { cn } from "../lib/utils"

const Wrapper = ({ children, className }: { children: ReactNode, className?: string }) => {
   return (
      <section className={cn("w-[min(1200px,90%)] mx-auto", className)}>
         {children}
      </section>
   )
}

export default Wrapper
