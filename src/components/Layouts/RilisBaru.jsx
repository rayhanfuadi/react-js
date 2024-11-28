import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import TopRatingCard from "../Fragments/TopRatingCard"

import BadgeBiru from "../Elements/Badges/Badge"
import BadgeMerah from "../Elements/Badges/BadgeMerah"
import PopUpCard from "../Fragments/popUpCard"
import { useEffect, useState } from "react"
import { getRilisBaru } from "@/services/rilisBaru.services"
const RilisBaru = () => {

    // const productsRilis = [
    //     {
    //         id: 1,
    //         tittle: "The Little Mermaid",
    //         badge: <BadgeMerah />,
    //         img: "img/film/r1.png",
    //         justify: "end",
    //     },
    //     {
    //         id: 2,
    //         tittle: "Duty After School",
    //         badge: <BadgeBiru />,
    //         img: "img/film/r2.png",
    //         justify: "start",
    //     },
    //     {
    //         id: 3,
    //         tittle: "Big Hero 6",
    //         badge: <BadgeBiru />,
    //         img: "img/film/r3.png",
    //     },
    //     {
    //         id: 4,
    //         tittle: "All Of Us Are Dead",
    //         badge: <BadgeBiru />,
    //         img: "img/film/r4.png",
    //         justify: "start",
    //     },
    //     {
    //         id: 5,
    //         tittle: "Missing",
    //         badge: <BadgeBiru />,
    //         img: "img/film/r5.png",
    //         justify: "start",
    //     },
    //     {
    //         id: 6,
    //         tittle: "The Little Mermaid",
    //         badge: <BadgeMerah />,
    //         img: "img/film/r6.png",
    //         justify: "end",
    //     },
    //     {
    //         id: 7,
    //         tittle: "Duty After School",
    //         badge: <BadgeBiru />,
    //         img: "img/film/r7.png",
    //         justify: "start",
    //     },
    //     {
    //         id: 8,
    //         tittle: "Big Hero 6",
    //         badge: <BadgeBiru />,
    //         img: "img/film/r8.png",
    //     },
    // ]

    const [film, setFilm] = useState([])
    useEffect(() => {
        const storedFilm = JSON.parse(localStorage.getItem('film')) || []
        setFilm(storedFilm)
    }, [])

    const [successMessage, setSuccessMessage] = useState("")
    const handleAddToCart = (productId, productTittle, productBadge, productImg) => {
        const newFilmItem = {
            id: productId,
            tittle: productTittle,
            badge: productBadge,
            img: productImg,
        };

        if (!film.some((e) => e.id === productId)) {
            const newFilm = [...film, newFilmItem]
            setFilm(newFilm)
            localStorage.setItem('film', JSON.stringify(newFilm))
            setSuccessMessage("Berhasil disimpan ke Daftar Saya!")
            setTimeout(() => setSuccessMessage(""), 3000)
        }
    }

    const badgeComponents = {
        BadgeBiru: <BadgeBiru />,
        BadgeMerah: <BadgeMerah />,
    }
    const RenderBadge = ({ badgeName }) => {
        return badgeComponents[badgeName] || null;
    }

    const [productsRilis, setProductsRating] = useState([])
    useEffect(() => {
        getRilisBaru((data) => {
            setProductsRating(data)
        })
    }, [])

    return (
        <div className="bg-primary container py-[20px] lg:py-[40px]">
            <div className="font-semibold text-white text-[20px] lg:text-[32px] mb-[20px] lg:mb-[32px]">Rilis Baru
            </div>

            {/* Pop Up Card */}
            {productsRilis.map((e, index) => (
                <div key={index}>
                    <input type="checkbox" id={`rilis_modal_${e.id}`} className="modal-toggle" />
                    <div className="modal" role="dialog">
                        <div className="modal-box bg-primary p-0 w-fit">
                            <PopUpCard img={e.img} tittle={e.tittle} />
                            <div className="flex justify-end items-center gap-2 lg:gap-4 mb-3 lg:mb-5 mx-3 lg:mx-6">
                                {successMessage && <span className="text-green-500">{successMessage}</span>}
                                <button className="btn text-white bg-slate-800 hover:bg-slate-900/80" onClick={() => handleAddToCart(e.id, e.tittle, e.badge, e.img)}>Masukan List</button>
                            </div>
                        </div>
                        <label className="modal-backdrop" htmlFor={`rilis_modal_${e.id}`}>Close</label>
                    </div>
                </div>
            ))}

            {/* Prducts Carousel Rilis Baru */}
            <div className="relative flex justify-center p-0 bg-primary">
                <Carousel opts={{ align: "start", }} className="relative w-full">
                    <CarouselContent className="m-0 flex justify-start gap-x-3 lg:gap-x-6">

                        {productsRilis.map((product, index) => (
                            <CarouselItem key={index} className="relative p-0 basis-1/3 md:basis-1/4 lg:basis-1/5">
                                <label htmlFor={`rilis_modal_${product.id}`} className="">
                                    <div className="relative cursor-pointer group">
                                        <div className="bg-gradient-to-t from-[#000] to-[#000]/0 cursor-pointer font-semibold text-lg lg:text-xl text-white text-center  absolute bottom-0 left-0 right-0 text px-2 lg:px-3 pb-4 lg:pb-6 pt-6 lg:pt-8 group-hover:z-50">{product.tittle}</div>
                                        <Card className="rounded-xl p-0 w-full border-none">
                                            <CardContent className="flex p-0 items-center justify-center">
                                                <TopRatingCard className="" justify={product.justify} children={<RenderBadge badgeName={product.badge} />} img={product.img} />
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

export default RilisBaru