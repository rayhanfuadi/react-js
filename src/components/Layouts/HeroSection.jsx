const HeroSection = (props) => {
    const { hero } = props
    return (
        <div className="container-xl relative">
            <div
                className="w-full h-full flex flex-col absolute top-0 left-0 justify-center items-start z-30 px-[20px] lg:px-[80px] md:px-[80px] gap-3">
                <div className="text-white text-[24px] lg:text-[48px] lg:font-semibold md:text-[36px]">Duty After School</div>
                <p
                    className="text-white text-[12px] lg:h-auto lg:w-[668px] md:w-[668px] lg:text-[18px] md:text-[16px] h-[40px] text-truncate overflow-hidden">
                    Sebuah benda tak
                    dikenal
                    mengambil alih dunia. Dalam
                    keputusasaan,
                    DepartemenPertahanan mulai
                    merekrut lebih tentara termasuk siswa sekolah menengah. Mereka pun segera menjadi garis depan dalam
                    perang.</p>
                <div className="w-full flex justify-between text-white z-30">
                    <div className="flex gap-2">
                        <a className="py-1 px-3 flex items-center justify-center bg-blue-600 hover:bg-blue-800 rounded-full font-semibold text-[12px] lg:text-[16px] md:text-[14px]"
                            href="">Mulai</a>
                        <a className="py-1 px-3 flex items-center justify-center bg-slate-800 hover:bg-slate-900 rounded-full font-semibold text-[12px] lg:text-[16px] md:text-[14px]"
                            href="">Selengkapnya</a>
                        <a className="py-1 px-3 flex items-center justify-center bg-none border-[1px] border-white rounded-full font-semibold text-[12px] lg:text-[16px] md:text-[14px]"
                            href="">18+</a>
                    </div>
                    <div className="flex">
                        <img className="lg:w-[36px]" src="img/volume-off.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className="w-full relative lg:h-[600px]">
                <img className="w-full lg:object-cover lg:h-[590px]" src={`img/film/${hero}`} alt="" />
            </div>
        </div>
    )
}

export default HeroSection