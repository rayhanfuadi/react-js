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
import { Card, CardContent } from "@/components/ui/card"
import PopUpCard from "../Fragments/popUpCard"
import { getTopRating } from "@/services/topFilm.services"

// const productsRating = [
//     {
//         id: 1,
//         tittle: "Suzume",
//         badge: <BadgeBiru />,
//         img: "img/film/t1.png",
//     },
//     {
//         id: 2,
//         tittle: "Jurassic World",
//         badge: <BadgeBiru />,
//         img: "img/film/t2.png",
//     },
//     {
//         id: 3,
//         tittle: "Sonic 2",
//         badge: <BadgeBiru />,
//         img: "img/film/t3.png",
//     },
//     {
//         id: 4,
//         tittle: "All Of Us Are Dead",
//         badge: <BadgeBiru />,
//         img: "img/film/t4.png",
//     },
//     {
//         id: 5,
//         tittle: "Big Hero 6",
//         badge: <BadgeBiru />,
//         img: "img/film/t5.png",
//     },
//     {
//         id: 6,
//         tittle: "Suzume",
//         badge: <BadgeBiru />,
//         img: "img/film/t6.png",
//     },
//     {
//         id: 7,
//         tittle: "Jurassic World",
//         badge: <BadgeBiru />,
//         img: "img/film/t2.png",
//     },
//     {
//         id: 8,
//         tittle: "Sonic 2",
//         badge: <BadgeBiru />,
//         img: "img/film/t3.png",
//     }
// ]

const List = () => {
    const badgeComponents = {
        BadgeBiru: <BadgeBiru />,
    }
    const RenderBadge = ({ badgeName }) => {
        return badgeComponents[badgeName] || null;
    }

    const [productsRating, setProductsRating] = useState([])
    useEffect(() => {
        getTopRating((data) => {
            setProductsRating(data)
        })
    })



    const [film, setFilm] = useState([])
    // const [totalFilm, setTotalFilm] = useState([])
    const [filmToDelete, setFilmToDelete] = useState(null);

    useEffect(() => {
        const storedFilm = JSON.parse(localStorage.getItem('film')) || []
        setFilm(storedFilm)
    }, [])

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
        }
    }

    const handleDeleteFilm = () => {
        if (filmToDelete) {
            const updatedFilm = film.filter(item => item.id !== filmToDelete);
            setFilm(updatedFilm);
            localStorage.setItem('film', JSON.stringify(updatedFilm));
            setFilmToDelete(null); // Reset filmToDelete setelah menghapus
        }
    };
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
                        {productsRating.map((e) => (
                            <div key={e.id}>
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
                    </div>

                </div>
            </div >

            {/* List Film */}
            <div className="bg-slate-100/10 mb-[20px] h-full">
                <div className="p-5 lg:px-[80px] lg:py-[40px]">
                    <h1 className="text-3xl font-semibold text-white text-center mb-4 lg:mb-6">List Film</h1>
                    <div className="flex flex-wrap justify-center gap-3 lg:gap-5 ">
                        {film.length > 0 ? (
                            film.map((item) => (
                                <Carousel key={item.id} className="basis-1/3 md:basis-1/4 lg:basis-1/5">
                                    <CarouselItem className="m-0 p-0 basis-1/3 md:basis-1/4 lg:basis-1/5">
                                        <div className="cursor-pointer">
                                            <Card className="rounded-xl p-0 w-full border-none">
                                                <CardContent className="flex p-0 items-center justify-center">
                                                    <TopRatingCard
                                                        justify="start"
                                                        img={item.img}
                                                    />
                                                </CardContent>
                                            </Card>
                                            {/* Tombol Hapus */}
                                            <button
                                                className="absolute bg-transparent w-full h-full top-0 text-red-500"
                                                onClick={() => setFilmToDelete(item.id)}
                                            ></button>
                                        </div>
                                    </CarouselItem>
                                </Carousel>
                            ))
                        ) : (
                            <div className="">List Film Kosong</div>
                        )}

                    </div>
                </div>
            </div>

            {/* Modal Konfirmasi Hapus */}
            {filmToDelete && (
                <div className="modal modal-open" role="dialog">
                    <div className="modal-box bg-primary">
                        <h2 className="text-white">Konfirmasi Hapus</h2>
                        <p className="text-white">Apakah Anda yakin ingin menghapus film ini?</p>
                        <div className="flex justify-end mt-4">
                            <button className="btn text-white bg-red-500 hover:bg-red-600" onClick={handleDeleteFilm}>Hapus</button>
                            <button className="btn text-white bg-gray-500 hover:bg-gray-600 ml-2" onClick={() => setFilmToDelete(null)}>Batal</button>
                        </div>
                    </div>
                    <label className="modal-backdrop" onClick={() => setFilmToDelete(null)}>Close</label>
                </div>
            )}

        </div >

    )
}

export default List 