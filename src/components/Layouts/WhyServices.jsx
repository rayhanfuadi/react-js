const WhyServices = () => {
    return (
        <div className="p-5 lg:px-[80px] lg:py-[40px]">
            <div className="grid gap-[36px] lg:gap-[72px]">
                <h1 className="text-white text-center text-[18px] lg:text-[32px] font-semibold ">Kenapa Harus Berlangganan?</h1>
                <div className="grid w-full">
                    <div className="grid gap-[20px] lg:gap-[40px]  grid-cols-2 justify-center lg:grid-cols-3 lg:justify-between">

                        <div className="grid justify-center w-full">
                            <div className="flex justify-center mb-[8px] lg:mb-[24px]">
                                <img className="" src="../img/download.svg" alt="" />
                            </div>
                            <p className="text-[#C1C2C4] text-center text-[16px] lg:text-[20px] font-semibold cursor-pointer mb-[24px] hover:text-white">Download Konten
                                Pilihan</p>
                        </div>
                        <div className="grid justify-center w-full">
                            <div className="flex justify-center mb-[8px] lg:mb-[24px]">
                                <img className="" src="../img/ads.svg" alt="" />
                            </div>
                            <p className="text-[#C1C2C4] text-center text-[16px] lg:text-[20px] font-semibold cursor-pointer mb-[24px] hover:text-white">Tidak Ada Iklan</p>
                        </div>
                        <div className="grid justify-center w-full">
                            <div className="flex justify-center mb-[8px] lg:mb-[24px]">
                                <img className="" src="../img/movie-roll.svg" alt="" />
                            </div>
                            <p className="text-[#C1C2C4] text-center text-[16px] lg:text-[20px] font-semibold cursor-pointer mb-[24px] hover:text-white">Tonton Semua Konten</p>
                        </div>

                        <div className="grid justify-center w-full">
                            <div className="flex justify-center mb-[8px] lg:mb-[24px]">
                                <img className="" src="../img/4k.svg" alt="" />
                            </div>
                            <p className="text-[#C1C2C4] text-center text-[16px] lg:text-[20px] font-semibold cursor-pointer mb-[24px] hover:text-white">Kualitas Maksimal Sampai Dengan 4K</p>
                        </div>
                        <div className="grid justify-center w-full">
                            <div className="flex justify-center mb-[8px] lg:mb-[24px]">
                                <img className="" src="../img/tablet-phone.svg" alt="" />
                            </div>
                            <p className="text-[#C1C2C4] text-center text-[16px] lg:text-[20px] font-semibold cursor-pointer mb-[24px] hover:text-white">Tonton di Tv, Tablet, Mobile, dan Laptop</p>
                        </div>
                        <div className="grid justify-center w-full">
                            <div className="flex justify-center mb-[8px] lg:mb-[24px]">
                                <img className="" src="../img/subtittle.svg" alt="" />
                            </div>
                            <p className="text-[#C1C2C4] text-center text-[16px] lg:text-[20px] font-semibold cursor-pointer mb-[24px] hover:text-white">Subtitle Untuk Konten Pilihan</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyServices