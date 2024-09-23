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
                        <img className="w-[20px] h-[20px] lg:w-[40px] lg:h-[40px]" src="img/pengguna.png" alt="" />
                        <img className="w-[12px] h-[12px] lg:w-[24px] lg:h-[24px]" src=" img/arrowDown.svg" alt="" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="absolute -right-10 py-[8px] w-auto bg-primary text-white border-none">
                    <DropdownMenuLabel className="px-[12px] py-[8px] hover:bg-[#0f1011] cursor-pointer">Profil Saya</DropdownMenuLabel>
                    <DropdownMenuLabel className="px-[12px] py-[8px] hover:bg-[#0f1011] cursor-pointer">Ubah Premium</DropdownMenuLabel>
                    <a href="/login">
                        <DropdownMenuLabel className="px-[12px] py-[8px] hover:bg-[#0f1011] cursor-pointer">Keluar</DropdownMenuLabel>
                    </a>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default MenuBar