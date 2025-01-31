import { FC } from "react"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type ButtonTypes = {
   label: string
   onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
   disabled?: boolean
   outline?: boolean
   small?: boolean
   icon?: LucideIcon
}

export const Button: FC<ButtonTypes> = ({
   label,
   onClick,
   disabled,
   outline,
   small,
   icon: Icon,
}) => {
   return (
      <button
         onClick={onClick}
         disabled={disabled}
         className={cn(
            "relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full",
            outline ? "bg-white border-black text-black" : "bg-rose-500 border-rose-500 text-white",
            small ? "py-1 text-sm font-light border" : "py-3 text-base font-semibold border-2"
         )}
      >
         {Icon && <Icon className="absolute left-4 top-3 h-6 w-6" />}
         {label}
      </button>
   )
}