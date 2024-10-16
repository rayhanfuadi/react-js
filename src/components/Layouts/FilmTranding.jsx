import ShadcnCarousel from "../Shadcn/ShadcnCarousel"
import BadgeMerah from "../Elements/Badges/BadgeMerah"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import TopRatingCard from "../Fragments/TopRatingCard"
import { Card, CardContent } from "@/components/ui/card"

export const FilmTranding = () => {

    const productsTranding = [
        {
            id: 1,
            badge: <BadgeMerah />,
            img: "img/film/f1.png",
        },
        {
            id: 2,
            badge: <BadgeMerah />,
            img: "img/film/f2.png",
        },
        {
            id: 3,
            badge: <BadgeMerah />,
            img: "img/film/f3.png",
        },
        {
            id: 4,
            badge: <BadgeMerah />,
            img: "img/film/f4.png",
        },
        {
            id: 5,
            badge: <BadgeMerah />,
            img: "img/film/f5.png",
        },
        {
            id: 6,
            badge: <BadgeMerah />,
            img: "img/film/f6.png",
        },
        {
            id: 7,
            badge: <BadgeMerah />,
            img: "img/film/f2.png",
        },
        {
            id: 8,
            badge: <BadgeMerah />,
            img: "img/film/f3.png",
        },
    ]

    return (
        <div className="p-[20px] lg:py-[40px] lg:px-[80px] bg-primary">
            <div className="font-semibold text-white text-[20px] lg:text-[32px] mb-[20px] lg:mb-[32px]">Film Tranding
            </div>
            {/* <!-- start --> */}
            {/* <ShadcnCarousel type="f" justify="end" children={<BadgeMerah />} /> */}

            {/* Products Carousel Film Tranding */}
            <div className="relative flex justify-center p-0 bg-primary">
                <Carousel opts={{ align: "start", }} className="relative w-full">
                    <CarouselContent className="m-0 flex justify-start gap-x-3 lg:gap-x-6">

                        {productsTranding.map((product) => (
                            <CarouselItem key={product.id} className="p-0 basis-1/3 md:basis-1/4 lg:basis-1/5">
                                <div className="">
                                    <Card className="rounded-xl p-0 w-full border-none">
                                        <CardContent className="flex p-0 items-center justify-center">
                                            <TopRatingCard className="" justify="end" children={product.badge} img={product.img} />
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

export default FilmTranding