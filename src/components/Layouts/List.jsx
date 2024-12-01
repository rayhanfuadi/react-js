import { useState, useEffect } from "react"
import BadgeBiru from "../Elements/Badges/Badge"
import BadgeMerah from "../Elements/Badges/BadgeMerah"
import TopRatingCard from "../Fragments/TopRatingCard"
import {
    Carousel,
    CarouselItem,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { useDispatch } from "react-redux"
import { deleteFilm } from "@/stores/redux"

const List = () => {
    const dispatch = useDispatch()
    const [film, setFilm] = useState([])
    const [filmToDelete, setFilmToDelete] = useState(null);

    useEffect(() => {
        const storedFilm = JSON.parse(localStorage.getItem('film')) || []
        setFilm(storedFilm)
    }, [])

    const badgeComponents = {
        BadgeBiru: <BadgeBiru />,
        BadgeMerah: <BadgeMerah />
    }
    const RenderBadge = ({ badgeName }) => {
        return badgeComponents[badgeName] || null;
    }

    return (
        <div className="">
            <div className="bg-primary container py-[20px] lg:py-[40px]">
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
                                        <div className="relative cursor-pointer group">
                                            <div className="bg-gradient-to-t from-[#000] to-[#000]/0 cursor-pointer font-semibold text-sm lg:text-xl text-white text-center  absolute bottom-0 left-0 right-0 text px-2 lg:px-3 pb-4 lg:pb-6 pt-6 lg:pt-8 group-hover:z-50">{item.tittle}</div>
                                            <Card className="rounded-xl p-0 w-full border-none">
                                                <CardContent className=" flex p-0 items-center justify-center">
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
                                            {/* Modal Konfirmasi Hapus */}
                                            {filmToDelete && (
                                                <div className="modal modal-open !bg-transparent" role="dialog">
                                                    <div className="modal-box bg-primary border border-slate-700">
                                                        <h2 className="text-white mb-1 lg:mb-2 font-semibold">Konfirmasi Hapus</h2>
                                                        <p className="text-white">Apakah Anda yakin ingin menghapus film ini dari Daftar Saya?</p>
                                                        <div className="flex justify-end mt-4">
                                                            <button className="btn text-white bg-red-500 hover:bg-red-600" onClick={() => {
                                                                dispatch(deleteFilm({ id: filmToDelete }))
                                                                setFilmToDelete(null)
                                                            }}>Hapus</button>
                                                            <button className="btn text-white bg-slate-700 hover:bg-slate-800 ml-2" onClick={() => setFilmToDelete(null)}>Batal</button>
                                                        </div>
                                                    </div>
                                                    <label className="modal-backdrop bg-primary/10" onClick={() => setFilmToDelete(null)}>Close</label>
                                                </div>
                                            )}
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



        </div >

    )
}

export default List 