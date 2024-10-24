"use client"

import * as React from "react"
import { useEffect } from "react"
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
import Api from "@/api/genre-api"


const HeroFilm = (props) => {
    const { hero } = props
    useEffect(() => {
        Api.get('/genres').then((res) => {
            console.log(res)
        })
    }, [])

    const genre = [
        {
            tittle: "Aksi",
        },
        {
            tittle: "KDrama",
        },
        {
            tittle: "Anak-anak",
        },
        {
            tittle: "Komedia",
        },
        {
            tittle: "Anime",
        },
        {
            tittle: "Petualangan",
        },
        {
            tittle: "Britania",
        },
        {
            tittle: "Perang",
        },
        {
            tittle: "Drama",
        },
        {
            tittle: "Romantis",
        },
        {
            tittle: "Fantasi Ilmiah & Fantasi",
        },
        {
            tittle: "Sains & Alama",
        },
        {
            tittle: "Kejahatan",
        },
        {
            tittle: "Thriller",
        },
    ]

    return (
        <div className="container-xl relative">
            <div className="w-full h-full flex flex-col lg:justify-between py-[20px] lg:py-[80px] absolute top-0 left-0 justify-center items-start z-30 px-[20px] lg:px-[80px] md:px-[80px]">
                <div className="hidden lg:block genre">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className="text-[14px] font-medium bg-[#22282A] hover:bg-[#171b1d] text-white flex items-center gap-2 border-none active:outline active:outline-none focus:outline focus:outline-none" variant="outline">
                                Genre
                                <img src="img/arrowDown.svg" alt="" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="absolute bg-[#22282A] w-[392px] -left-[52px] border-none">
                            <div className="grid grid-cols-2 rounded-md">
                                {genre.map((name, index) => (
                                    <div key={index}>
                                        <p className="text-[14px] font-medium text-white rounded-md px-[12px] py-[8px] hover:bg-[#3D4142] cursor-pointer">{name.tittle}</p>
                                    </div>
                                ))}
                            </div>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="flex flex-col w-full gap-3 lg:gap-8">
                    <div className="grid gap-2 lg:gap-5">
                        <div className="text-white text-[24px] lg:text-[48px] lg:font-semibold md:text-[36px]">Avatar 3</div>
                        <p
                            className="text-white text-[12px] lg:h-auto lg:w-[668px] md:w-[668px] lg:text-[18px] md:text-[16px] h-[40px] text-truncate overflow-hidden">"Avatar 3" melanjutkan cerita konflik antara manusia dan Na'vi di planet Pandora. Dalam pertempuran untuk sumber daya dan kekuasaan, manusia dan sekutu Na'vi bersatu untuk melindungi tanah mereka. Film ini mengangkat tema persatuan dan perlawanan terhadap eksploitasi.</p>
                    </div>
                    <div className="w-full flex justify-between text-white z-30">
                        <div className="flex gap-2">
                            <a className="py-1 px-3 flex items-center justify-center bg-[#0F1E93] rounded-full font-semibold text-[12px] lg:text-[16px] md:text-[14px]"
                                href="">Mulai</a>
                            <a className="py-1 px-3 flex items-center justify-center bg-[#22282A] rounded-full font-semibold text-[12px] lg:text-[16px] md:text-[14px]"
                                href="">Selengkapnya</a>
                            <a className="py-1 px-3 flex items-center justify-center bg-none border-[1px] border-white/50 rounded-full font-semibold text-[12px] lg:text-[16px] md:text-[14px]"
                                href="">18+</a>
                        </div>
                        <div className="flex">
                            <img className="lg:w-[36px]" src="img/volume-off.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full relative lg:h-[600px]">
                <img className="w-full lg:object-cover lg:h-[590px]" src={`img/film/${hero}`} alt="" />
            </div>
        </div>
    )
}

export default HeroFilm