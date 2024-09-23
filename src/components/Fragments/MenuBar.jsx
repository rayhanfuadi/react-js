"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
export const MenuBar = () => {
    const [position, setPosition] = React.useState("bottom")
    return (
        <div className="relative flex justify-end">
            <DropdownMenu className="flex justify-end w-full">
                <DropdownMenuTrigger asChild className="border-none text-white">
                    <Button variant="outline" className="flex items-center gap-2">
                        <img className="w-[24px] h-[24px] lg:w-[40px] lg:h-[40px]" src="img/pengguna.png" alt="" />
                        <img className="w-[24px] h-[24px] lg:w-[24px] lg:h-[24px]" src=" img/arrowDown.svg" alt="" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="absolute  flex flex-col -right-10 py-[8px] w-auto bg-primary text-white border-none">
                    <DropdownMenuLabel className="w-[150px] flex items-center gap-2 px-[12px] py-[8px] hover:bg-[#0f1011] hover:text-indigo-500 cursor-pointer">
                        <img className="w-[20px]" src="img/user.svg" alt="" />
                        Profil Saya
                    </DropdownMenuLabel>
                    <DropdownMenuLabel className="w-[150px] flex items-center gap-2 px-[12px] py-[8px] hover:bg-[#0f1011] hover:text-indigo-500 cursor-pointer">
                        <img className="w-[20px]" src="img/star.svg" alt="" />
                        Ubah Premium
                    </DropdownMenuLabel>
                    <a href="/login">
                        <DropdownMenuLabel className="w-[150px] flex items-center gap-2 px-[12px] py-[8px] hover:bg-[#0f1011] hover:text-indigo-500 cursor-pointer">
                            <img className="w-[20px]" src="img/logout.svg" alt="" />
                            Keluar
                        </DropdownMenuLabel>
                    </a>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default MenuBar