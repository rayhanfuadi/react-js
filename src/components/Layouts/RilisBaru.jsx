import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import TopRatingCard from "../Fragments/TopRatingCard"
import * as React from "react"

import BadgeBiru from "../Elements/Badges/Badge"
import RilisCard from "../Fragments/RilisCard"
import BadgeMerah from "../Elements/Badges/BadgeMerah"
const RilisBaru = () => {

    const productsRilis = [
        {
            id: 1,
            badge: <BadgeMerah />,
            img: "img/film/r1.png",
            justify: "end",
        },
        {
            id: 2,
            badge: <BadgeBiru />,
            img: "img/film/r2.png",
            justify: "start",
        },
        {
            id: 3,
            badge: <BadgeBiru />,
            img: "img/film/r3.png",
        },
        {
            id: 4,
            badge: <BadgeBiru />,
            img: "img/film/r4.png",
            justify: "start",
        },
        {
            id: 5,
            badge: <BadgeBiru />,
            img: "img/film/r5.png",
            justify: "start",
        },
        {
            id: 6,
            badge: <BadgeMerah />,
            img: "img/film/r6.png",
            justify: "end",
        },
        {
            id: 7,
            badge: <BadgeBiru />,
            img: "img/film/r7.png",
            justify: "start",
        },
        {
            id: 8,
            badge: <BadgeBiru />,
            img: "img/film/r8.png",
        },
    ]

    return (
        <div className="p-[20px] lg:py-[40px] lg:px-[80px] bg-primary">
            <div className="font-semibold text-white text-[20px] lg:text-[32px] mb-[20px] lg:mb-[32px]">Rilis Baru
            </div>

            {/* Prducts Carousel Rilis Baru */}
            <div className="relative flex justify-center p-0 bg-primary">
                <Carousel opts={{ align: "start", }} className="relative w-full">
                    <CarouselContent className="m-0 flex justify-start gap-x-3 lg:gap-x-6">

                        {productsRilis.map((product) => (
                            <CarouselItem key={product.id} className="p-0 basis-1/3 md:basis-1/4 lg:basis-1/5">
                                <div className="">
                                    <Card className="rounded-xl p-0 w-full border-none">
                                        <CardContent className="flex p-0 items-center justify-center">
                                            <TopRatingCard className="" justify={product.justify} children={product.badge} img={product.img} />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}

                    </CarouselContent>
                    <div className="absolute flex justify-center items-center m-auto left-0 right-0 w-[78%] lg:w-[90%] top-[50%]">
                        <CarouselPrevious className="text-white absolute m-auto bg-slate-800 border-none" />
                        <CarouselNext className="text-white bg-slate-800 border-none" />
                    </div>
                </Carousel>
            </div >

        </div >
    )
}

export default RilisBaru