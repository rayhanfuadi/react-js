import { useState, useEffect } from "react"
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
import { getTopRating } from "@/services/topFilm.services"
import { useDispatch, useSelector } from "react-redux"
import { addFilm, clearSuccessMessage } from "@/stores/redux"
import BadgeMerah from "../Elements/Badges/BadgeMerah"

export const TopRating = () => {
    const dispatch = useDispatch()
    const reduxSuccessMessage = useSelector((state) => state.film.successMessage)
    const [localSuccessMessage, setLocalSuccessMessage] = useState("");

    useEffect(() => {
        if (reduxSuccessMessage) {
            setLocalSuccessMessage(reduxSuccessMessage)
            const timer = setTimeout(() => {
                dispatch(clearSuccessMessage())
                setLocalSuccessMessage("")
            }, 3000)
            return () => clearTimeout(timer)
        }
    }, [reduxSuccessMessage, dispatch])

    const badgeComponents = {
        BadgeBiru: <BadgeBiru />,
        BadgeMerah: <BadgeMerah />,
    }
    const RenderBadge = ({ badgeName }) => {
        return badgeComponents[badgeName] || null;
    }

    const [productsRating, setProductsRating] = useState([])
    useEffect(() => {
        getTopRating((data) => {
            setProductsRating(data)
        })
    }, [])

    return (
        <div className="bg-primary container py-[20px] lg:py-[40px]">

            <div className="font-semibold text-white text-[20px] lg:text-[32px] mb-[20px] lg:mb-[32px]">Top Rating Film dan
                Series Hari
                ini
            </div>

            {/* Pop Up Card */}
            {productsRating.map((e) => (
                <div key={e.id}>
                    <input type="checkbox" id={`rating_modal_${e.id}`} className="modal-toggle" />
                    <div className="modal" role="dialog">
                        <div className="modal-box bg-primary p-0 w-fit">
                            <PopUpCard img={e.img} tittle={e.tittle} />
                            <div className="flex justify-end items-center gap-2 lg:gap-4 mb-3 lg:mb-5 mx-3 lg:mx-6">
                                {localSuccessMessage && <span className="text-green-500">{localSuccessMessage}</span>}
                                <button className="btn text-white bg-slate-800 hover:bg-slate-900/80" onClick={() => dispatch(addFilm({ id: e.id, tittle: e.tittle, badge: e.badge, img: e.img }))}>Masukan List</button>
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
                            <CarouselItem key={index} className="relative p-0 m-0 bg-black rounded-xl basis-1/3 md:basis-1/4 lg:basis-1/5">
                                <label htmlFor={`rating_modal_${product.id}`} className="">
                                    <div className="relative cursor-pointer group">
                                        <div className="bg-gradient-to-t from-[#000] to-[#000]/0 cursor-pointer font-semibold text-sm lg:text-xl text-white text-center  absolute bottom-0 left-0 right-0 text px-2 lg:px-3 pb-4 lg:pb-6 pt-6 lg:pt-8 group-hover:z-50">{product.tittle}</div>
                                        <Card className="rounded-xl p-0 w-full border-none">
                                            <CardContent className="flex p-0 items-center justify-center">
                                                <TopRatingCard className="" justify="start" children={<RenderBadge badgeName={product.badge} />} img={product.img} />
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