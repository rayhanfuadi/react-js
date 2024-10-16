import BadgeBiru from "../Elements/Badges/Badge"
import TopRatingCard from "../Fragments/TopRatingCard"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"

const List = () => {
    const productsRating = [
        {
            id: 1,
            badge: <BadgeBiru />,
            img: "img/film/t1.png",
        },
        {
            id: 2,
            badge: <BadgeBiru />,
            img: "img/film/t2.png",
        },
        {
            id: 3,
            badge: <BadgeBiru />,
            img: "img/film/t3.png",
        },
        {
            id: 4,
            badge: <BadgeBiru />,
            img: "img/film/t4.png",
        },
        {
            id: 5,
            badge: <BadgeBiru />,
            img: "img/film/t5.png",
        },
        {
            id: 6,
            badge: <BadgeBiru />,
            img: "img/film/t6.png",
        },
        {
            id: 7,
            badge: <BadgeBiru />,
            img: "img/film/t2.png",
        },
        {
            id: 8,
            badge: <BadgeBiru />,
            img: "img/film/t3.png",
        }
    ]
    return (
        <div className="p-5 lg:px-[80px] lg:py-[40px]" >
            <div className="grid gap-8">
                <div className="flex justify-between">
                    <h1 className="text-white font-bold text-xl lg:text-[32px]">Daftar Saya</h1>
                    <p className="text-white text-[18px] hidden lg:block">Lihat Semua</p>
                </div>
                <div className="">
                    {/* <ShadcnCarousel type="t" justify="start" children={<BadgeBiru />} /> */}

                    {/* Carousel Top Rating */}
                    <div className="relative flex justify-center p-0 bg-primary">
                        <Carousel opts={{ align: "start", }} className="relative w-full">
                            <CarouselContent className="m-0 flex justify-start gap-x-3 lg:gap-x-6">
                                {productsRating.map((product) => (
                                    <CarouselItem className="p-0 basis-1/3 md:basis-1/4 lg:basis-1/5">
                                        <div className="">
                                            <Card className="rounded-xl p-0 w-full border-none">
                                                <CardContent className="flex p-0 items-center justify-center">
                                                    <TopRatingCard className="" justify="start" children={product.badge} img={product.img} />
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
                </div>

                <div className="bg-slate-100 mb-[20px] px-[20px] h-full">
                    <h1 className="text-2xl font-semibold">Cart</h1>
                </div>

            </div>
        </div >
    )
}

export default List 