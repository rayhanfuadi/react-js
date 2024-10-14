import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import BadgeBiru from "../Elements/Badges/Badge"
import RilisCard from "../Fragments/RilisCard"
import BadgeMerah from "../Elements/Badges/BadgeMerah"
const RilisBaru = () => {
    return (
        <div className="p-[20px] lg:py-[40px] lg:px-[80px] bg-primary">
            <div className="font-semibold text-white text-[20px] lg:text-[32px] mb-[20px] lg:mb-[32px]">Rilis Baru
            </div>
            {/* <!-- start --> */}
            <div className="relative flex justify-center p-0 bg-primary">
                <Carousel opts={{ align: "start", }} className="relative w-full">
                    <CarouselContent className="m-0 flex justify-start gap-x-3 lg:gap-x-6">
                        <RilisCard justify="end" badge={<BadgeMerah />} img={1} />
                        <RilisCard justify="start" badge={<BadgeBiru />} img={2} />
                        <RilisCard img={3} />
                        <RilisCard justify="start" badge={<BadgeBiru />} img={4} />
                        <RilisCard justify="start" badge={<BadgeBiru />} img={5} />
                        <RilisCard justify="end" badge={<BadgeMerah />} img={6} />
                        <RilisCard justify="start" badge={<BadgeBiru />} img={7} />
                        <RilisCard img={8} />
                    </CarouselContent>
                    <div className="absolute flex justify-center items-center m-auto left-0 right-0 w-[78%] lg:w-[90%] top-[50%]">
                        <CarouselPrevious className="text-white bg-slate-800 border-none" />
                        <CarouselNext className="text-white bg-slate-800 border-none" />
                    </div>
                </Carousel>
            </div >
        </div >
    )
}

export default RilisBaru