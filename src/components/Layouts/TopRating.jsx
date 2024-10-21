import BadgeBiru from "../Elements/Badges/Badge"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import TopRatingCard from "../Fragments/TopRatingCard"
import { Card, CardContent } from "@/components/ui/card"

export const TopRating = () => {
    const productsRating = [
        {
            id: 1,
            tittle: "Suzume",
            badge: <BadgeBiru />,
            img: "img/film/t1.png",
        },
        {
            id: 2,
            tittle: "Jurassic World",
            badge: <BadgeBiru />,
            img: "img/film/t2.png",
        },
        {
            id: 3,
            tittle: "Sonic 2",
            badge: <BadgeBiru />,
            img: "img/film/t3.png",
        },
        {
            id: 4,
            tittle: "All Of Us Are Dead",
            badge: <BadgeBiru />,
            img: "img/film/t4.png",
        },
        {
            id: 5,
            tittle: "Big Hero 6",
            badge: <BadgeBiru />,
            img: "img/film/t5.png",
        },
        {
            id: 6,
            tittle: "Suzume",
            badge: <BadgeBiru />,
            img: "img/film/t6.png",
        },
        {
            id: 7,
            tittle: "Jurassic World",
            badge: <BadgeBiru />,
            img: "img/film/t2.png",
        },
        {
            id: 8,
            tittle: "Sonic 2",
            badge: <BadgeBiru />,
            img: "img/film/t3.png",
        }
    ]

    return (
        <div className="p-[20px] lg:py-[40px] lg:px-[80px] bg-primary">
            <div className="font-semibold text-white text-[20px] lg:text-[32px] mb-[20px] lg:mb-[32px]">Top Rating Film dan
                Series Hari
                ini
            </div>

            {/* Put this part before </body> tag */}
            {productsRating.map((e) => (
                <div className="">
                    <input type="checkbox" id={`my_modal_${e.id}`} className="modal-toggle" />
                    <div className="modal" role="dialog">
                        <div className="modal-box bg-primary p-0 w-fit">
                            <img className="w-[250px] h-[160px] lg:w-[400px] lg:h-[250px] object-cover" src={e.img} alt="" />
                            <div className="flex flex-col px-[12px] mt-3 gap-3 lg:gap-5 lg:px-[24px] lg:mt-6">
                                <h3 className="text-[18px] lg:text-[24px] font-semibold">{e.tittle}</h3>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3 lg:gap-5">
                                        <div className="flex justify-center items-center rounded-full w-[36px] h-[36px] lg:w-[60px] lg:h-[60px]">
                                            <img src="img/play.svg" alt="" />
                                        </div>
                                        <div className="flex justify-center items-center rounded-full w-[36px] h-[36px] lg:w-[60px] lg:h-[60px] border-[1px] border-white">
                                            <img className="w-[20px] lg:w-[32px]" src="img/check.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center rounded-full w-[36px] h-[36px] lg:w-[60px] lg:h-[60px] border-[1px] border-white">
                                        <img className="w-[20px] lg:w-[32px]" src="img/arrowDown.svg" alt="" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 lg:gap-5">
                                    <div className="font-semibold px-2 py-1 lg:px-4 lg:py-2 bg-slate-700 rounded-full text-[12px] lg:text-[20px] ">
                                        13+
                                    </div>
                                    <p className="font-semibold text-white text-[12px] lg:text-[20px]">16 Episode</p>
                                </div>
                                <div className="flex justify-end gap-2 lg:gap-4 mb-3 lg:mb-5">
                                    <label htmlFor={`my_modal_${e.id}`} className="btn">Close</label>
                                    <label htmlFor={`my_modal_${e.id}`} className="btn">Okay, Got It!</label>
                                </div>
                            </div>
                        </div>
                        <label className="modal-backdrop" htmlFor={`my_modal_${e.id}`}>Close</label>
                    </div>
                </div>
            ))}


            {/* Products Carousel Top Rating */}
            <div className="flex justify-center p-0 bg-primary">
                <Carousel
                    className="relative w-full justify-center"
                    opts={{ align: "start", }}
                >
                    <CarouselContent className="relative m-0 flex justify-start gap-x-3 lg:gap-x-6">

                        {productsRating.map((product) => (
                            <CarouselItem className="p-0 m-0 basis-1/3 md:basis-1/4 lg:basis-1/5">
                                <label htmlFor={`my_modal_${product.id}`} className="">
                                    <div className="relative p-0">
                                        <Card className="rounded-xl p-0 w-full border-none cursor-pointer">
                                            <CardContent className="flex p-0 items-center justify-center">
                                                <TopRatingCard className="" justify="start" children={product.badge} img={product.img} />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </label>
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

export default TopRating