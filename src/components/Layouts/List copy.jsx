import { useState, useEffect } from "react"
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
import PopUpCard from "../Fragments/popUpCard"

const List = () => {
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

    const [film, setFilm] = useState([
        {
            id: 8,
            tittle: "Sonic 2",
            badge: <BadgeBiru />,
            img: "img/film/t3.png",
        }
    ])
    const [totalFilm, setTotalFilm] = useState([])

    useEffect(() => {
        setFilm(JSON.parse(localStorage.getItem("film")) || [])
    }, [])

    useEffect(() => {
        if (film.length > 0) {
            const total = film.reduce((total, film) => {
                const totalFilm = productsRating.find((e) => e.id === film.id)
                return total + totalFilm
            }, 0)
            setTotalFilm(total)
            localStorage.setItem("film", JSON.stringify(film))
        }
    }, [film])

    // useEffect(() => {
    //     setFilm(JSON.parse(localStorage.getItem("film")) || [])
    // }, [])

    // useEffect(() => {
    //     if (film.length > 0) {
    //         localStorage.setItem("setFilm", JSON.stringify(setFilm))
    //     }
    // }, [film])

    const handleAddToCart = (productId, productTittle, productBadge, productImg) => {
        if (film.find((e) => e.id === productId)) {
            setFilm(
                film.map((e) => e.id === productId ? { ...e, tittle: productTittle, badge: productBadge, img: productImg } : e)
            )
        } else {
            setFilm([
                ...film,
                {
                    id: productId,
                    tittle: productTittle,
                    badge: productBadge,
                    img: productImg
                }
            ])
        }
    }
    return (
        <div className="">
            <div className="p-5 lg:px-[80px] lg:py-[40px]">
                <div className="grid gap-8">
                    <div className="flex justify-between">
                        <h1 className="text-white font-bold text-xl lg:text-[32px]">Daftar Saya</h1>
                        <p className="text-white text-[18px] hidden lg:block">Lihat Semua</p>
                    </div>

                    <div className="">
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
                        {/* Carousel Top Rating */}
                        <div className="flex justify-center p-0 bg-primary">
                            <Carousel
                                className="relative w-full justify-center"
                                opts={{ align: "start", }}
                            >
                                <CarouselContent className="relative m-0 flex justify-start gap-x-3 lg:gap-x-6">

                                    {productsRating.map((product) => (
                                        <CarouselItem key={product.id} className="p-0 m-0 basis-1/3 md:basis-1/4 lg:basis-1/5">
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
                    </div>

                </div>
            </div >

            {/* Cart */}
            <div className="bg-slate-100/10 mb-[20px] h-full">
                <div className="p-5 lg:px-[80px] lg:py-[40px]">
                    <h1 className="text-2xl text-white mb-4">Use State (List Film)</h1>
                    <div className="flex flex-wrap gap-2 lg:gap-4 ">
                        {film.map((e, index) => {
                            const product = productsRating.find((product) => product.id === e.id);
                            return (
                                <Carousel Carousel key={e.id} className="basis-1/3 md:basis-1/4 lg:basis-1/5" >
                                    <CarouselItem className="m-0 p-0 basis-1/3 md:basis-1/4 lg:basis-1/5">
                                        <div className="cursor-pointer">
                                            <Card className="rounded-xl p-0 w-full border-none">
                                                <CardContent className="flex p-0 items-center justify-center">
                                                    <TopRatingCard className="" justify="start" children={product.badge} img={product.img} />
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                </Carousel>
                            )

                        }
                        )}
                    </div>
                </div>
            </div>

            {/* Cart2 */}
            <div className="bg-slate-100/10 mb-[20px] h-full">
                <div className="p-5 lg:px-[80px] lg:py-[40px]">
                    <h1 className="text-2xl text-white mb-4">Use State 2 (List Film)</h1>
                    <div className="flex flex-wrap gap-2 lg:gap-4 ">
                        {totalFilm.map((e, index) => {
                            const product = productsRating.find((product) => product.id === e.id);
                            return (
                                <Carousel Carousel key={e.id} className="basis-1/3 md:basis-1/4 lg:basis-1/5" >
                                    <CarouselItem className="m-0 p-0 basis-1/3 md:basis-1/4 lg:basis-1/5">
                                        <div className="cursor-pointer">
                                            <Card className="rounded-xl p-0 w-full border-none">
                                                <CardContent className="flex p-0 items-center justify-center">
                                                    <TopRatingCard className="" justify="start" children={product.badge} img={product.img} />
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                </Carousel>
                            )

                        }
                        )}
                    </div>
                </div>
            </div>
        </div >

    )
}

export default List 