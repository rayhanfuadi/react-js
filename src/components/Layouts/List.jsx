import { useState, useEffect } from "react"
import BadgeBiru from "../Elements/Badges/Badge"
import BadgeMerah from "../Elements/Badges/BadgeMerah"
import TopRatingCard from "../Fragments/TopRatingCard"
import {
    Carousel,
    CarouselItem,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

const List = () => {
    const [film, setFilm] = useState([])
    const [filmToDelete, setFilmToDelete] = useState(null);

    useEffect(() => {
        const storedFilm = JSON.parse(localStorage.getItem('film')) || []
        setFilm(storedFilm)
    }, [])

    // const handleAddToCart = (productId, productTittle, productBadge, productImg) => {
    //     const newFilmItem = {
    //         id: productId,
    //         tittle: productTittle,
    //         badge: productBadge,
    //         img: productImg,
    //     };

    //     if (!film.some((e) => e.id === productId)) {
    //         const newFilm = [...film, newFilmItem]
    //         setFilm(newFilm)
    //         localStorage.setItem('film', JSON.stringify(newFilm))
    //     }
    // }

    const handleDeleteFilm = () => {
        if (filmToDelete) {
            const updatedFilm = film.filter(item => item.id !== filmToDelete);
            setFilm(updatedFilm);
            localStorage.setItem('film', JSON.stringify(updatedFilm));
            setFilmToDelete(null);
        }
    };

    const badgeComponents = {
        BadgeBiru: <BadgeBiru />,
        BadgeMerah: <BadgeMerah />
    }
    const RenderBadge = ({ badgeName }) => {
        return badgeComponents[badgeName] || null;
    }

    return (
        <div className="">
            <div className="p-5 lg:px-[80px] lg:py-[40px]">
                {/* List Film */}
                <div className="">
                    <div className="flex justify-between">
                        <h1 className="text-3xl font-semibold text-white text-start mb-4 lg:mb-6">Daftar Film Saya</h1>
                        <p className="text-xl cursor-pointer text-white text-start mb-4 lg:mb-6 hover:font-semibold">Lihat semua</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:md:grid-cols-6 gap-3 lg:gap-5">
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
                                                        children={<RenderBadge badgeName={item.badge} />}
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
            </div >

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