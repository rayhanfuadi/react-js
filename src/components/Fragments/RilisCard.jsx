import BadgeBiru from "../Elements/Badges/Badge"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import TopRatingCard from "./TopRatingCard"
const RilisCard = (props) => {
    const { badge, img, justify } = props
    return (
        <CarouselItem className="p-0 basis-1/3 md:basis-1/4 lg:basis-1/5">
            <div className="flex">
                <Card className="rounded-xl flex p-0 w-full border-none">
                    <CardContent className="flex w-full p-0 items-center justify-center">
                        <TopRatingCard className="" justify={justify} children={badge} img={`img/film/r${img}.png`} />
                    </CardContent>
                </Card>
            </div>
        </CarouselItem>
    )
}

export default RilisCard