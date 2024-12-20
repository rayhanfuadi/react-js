import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import TopRatingCard from "../Fragments/TopRatingCard"
import { Card, CardContent } from "@/components/ui/card"
import * as React from "react"


const ShadcnCarousel = (props) => {
    const { type, justify, children } = props
    return (
        <div className="relative flex justify-center p-0 bg-primary">
            <Carousel opts={{ align: "start", }} className="relative w-full">
                <CarouselContent className="m-0 flex justify-start gap-x-3 lg:gap-x-6">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <CarouselItem key={index} className="p-0 basis-1/3 md:basis-1/4 lg:basis-1/5">
                            <div className="">
                                <Card className="rounded-xl p-0 w-full border-none">
                                    <CardContent className="flex p-0 items-center justify-center">
                                        <TopRatingCard className="" justify={justify} children={children} img={`img/film/${type}${index + 1}.png`} />
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
    )
}

export default ShadcnCarousel