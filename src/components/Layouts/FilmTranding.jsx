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
import PopUpCard from "../Fragments/popUpCard"
import { useState, useEffect } from "react"
import { getFilmTranding } from "@/services/filmTranding.services"

export const FilmTranding = () => {

    // const productsTranding = [
    //     {
    //         id: 1,
    //         tittle: "The Tomorrow War",
    //         badge: <BadgeMerah />,
    //         img: "img/film/f1.png",
    //     },
    //     {
    //         id: 2,
    //         tittle: "Quantumania",
    //         badge: <BadgeMerah />,
    //         img: "img/film/f2.png",
    //     },
    //     {
    //         id: 3,
    //         tittle: "Guardian Of Galaxy Vol III",
    //         badge: <BadgeMerah />,
    //         img: "img/film/f3.png",
    //     },
    //     {
    //         id: 4,
    //         tittle: "A Man Called Otto",
    //         badge: <BadgeMerah />,
    //         img: "img/film/f4.png",
    //     },
    //     {
    //         id: 5,
    //         tittle: "Little Mermaid",
    //         badge: <BadgeMerah />,
    //         img: "img/film/f5.png",
    //     },
    //     {
    //         id: 6,
    //         tittle: "The Tomorrow War",
    //         badge: <BadgeMerah />,
    //         img: "img/film/f6.png",
    //     },
    //     {
    //         id: 7,
    //         tittle: "Quantumania",
    //         badge: <BadgeMerah />,
    //         img: "img/film/f2.png",
    //     },
    //     {
    //         id: 8,
    //         tittle: "Guardian Of Galaxy Vol III",
    //         badge: <BadgeMerah />,
    //         img: "img/film/f3.png",
    //     },
    // ]

    const badgeComponents = {
        BadgeMerah: <BadgeMerah />,
    }
    const RenderBadge = ({ badgeName }) => {
        return badgeComponents[badgeName] || null;
    }

    const [productsTranding, setProductsRating] = useState([])
    useEffect(() => {
        getFilmTranding((data) => {
            setProductsRating(data)
        })
    }, [])

    return (
        <div className="p-[20px] lg:py-[40px] lg:px-[80px] bg-primary">
            <div className="font-semibold text-white text-[20px] lg:text-[32px] mb-[20px] lg:mb-[32px]">Film Tranding
            </div>

            {/* Pop Up Card */}
            {productsTranding.map((e, index) => (
                <div key={index}>
                    <input type="checkbox" id={`tranding_modal_${e.id}`} className="modal-toggle" />
                    <div className="modal" role="dialog">
                        <div className="modal-box bg-primary p-0 w-fit">
                            <PopUpCard img={e.img} tittle={e.tittle} />
                            <div className="flex justify-end gap-2 lg:gap-4 mb-3 lg:mb-5">
                                <button className="btn text-white bg-slate-800 mr-3 lg:mr-6 hover:bg-slate-900/80" onClick={() => handleAddToCart(e.id, e.tittle, e.badge, e.img)}>Masukan List</button>
                            </div>
                        </div>
                        <label className="modal-backdrop" htmlFor={`tranding_modal_${e.id}`}>Close</label>
                    </div>
                </div>
            ))
            }

            {/* Products Carousel Film Tranding */}
            <div className="relative flex justify-center p-0 bg-primary">
                <Carousel opts={{ align: "start", }} className="relative w-full">
                    <CarouselContent className="m-0 flex justify-start gap-x-3 lg:gap-x-6">

                        {productsTranding.map((product, index) => (
                            <CarouselItem key={index} className="p-0 basis-1/3 md:basis-1/4 lg:basis-1/5">
                                <label htmlFor={`tranding_modal_${product.id}`} className="">
                                    <div className="cursor-pointer">
                                        <Card className="rounded-xl p-0 w-full border-none">
                                            <CardContent className="flex p-0 items-center justify-center">
                                                <TopRatingCard className="" justify="end" children={<RenderBadge badgeName={product.badge} />} img={product.img} />
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

export default FilmTranding