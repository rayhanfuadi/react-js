import { useEffect } from "react"
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
import PopUpCard from "../Fragments/popUpCard"
import { getFilm } from "@/services/film.services"

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

    useEffect(() => {
        getFilm((data) => {
            console.log(data);
        })
    }, [])

    return (
        <div className="p-[20px] lg:py-[40px] lg:px-[80px] bg-primary">

            <div className="font-semibold text-white text-[20px] lg:text-[32px] mb-[20px] lg:mb-[32px]">Top Rating Film dan
                Series Hari
                ini
            </div>

            {/* Pop Up Card */}
            {productsRating.map((e, index) => (
                <div key={index}>
                    <input type="checkbox" id={`rating_modal_${e.id}`} className="modal-toggle" />
                    <div className="modal" role="dialog">
                        <div className="modal-box bg-primary p-0 w-fit">
                            <PopUpCard img={e.img} tittle={e.tittle} />
                            <div className="flex justify-end gap-2 lg:gap-4 mb-3 lg:mb-5">
                                <button className="btn text-white bg-slate-800 mr-3 lg:mr-6 hover:bg-slate-900/80" onClick={() => handleAddToCart(e.id, e.tittle, e.badge, e.img)}>Masukan List</button>
                            </div>
                        </div>
                        <label className="modal-backdrop" htmlFor={`rating_modal_${e.id}`}>Close</label>
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

                        {productsRating.map((product, index) => (
                            <CarouselItem key={index} className="p-0 m-0 basis-1/3 md:basis-1/4 lg:basis-1/5">
                                <label htmlFor={`rating_modal_${product.id}`} className="">
                                    <div className="cursor-pointer">
                                        <Card className="rounded-xl p-0 w-full border-none">
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