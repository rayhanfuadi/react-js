const Services = (props) => {
    const { packet, price, account, quality, } = props
    return (
        <div className="flex">
            <div className="p-5 grid gap-[18px] lg:gap-[38px] rounded-xl bg-gradient-to-tl from-[#192DB7] to-[#5370D4] hover:scale-[1.07] hover:shadow-2xl duration-300 w-full">
                <div className="grid gap-[12px] lg:gap-[24px]">
                    <div className="bg-[#3D4142] text-white px-[12px] py-[6px] lg:px-[24px] lg:py-[12px] rounded-full font-semibold w-fit">{packet}</div>
                    <div className="grid gap-1">
                        <p className="text-white text-[12px] lg:text-[14px]">{price}</p>
                        <p className="text-white text-[12px] lg:text-[14px]">{account}</p>
                    </div>
                    <div className="grid gap-1 lg:gap-2 w-full">
                        <p className="flex gap-2 text-white text-[12px] lg:text-[14px]"><img src="../img/check2.svg" alt="" />Tidak ada iklan</p>
                        <p className="flex gap-2 text-white text-[12px] lg:text-[14px]"><img src="../img/check2.svg" alt="" />{quality}</p>
                        <p className="flex gap-2 text-white text-[12px] lg:text-[14px]"><img src="../img/check2.svg" alt="" />Donwload konten pilihan</p>
                    </div>
                </div>
                <div className="border border-b-[1px] border-white/20"></div>
                <div className="flex flex-col gap-1 items-center justify-center">
                    <a href="/payment" className="w-fit bg-white text-[#0F1E93] font-semibold rounded-full leading-[140%] px-[12px] py-[4px] lg:px-[24px] lg:py-[8px] cursor-pointer hover:shadow-xl">Langganan</a>
                    <p className="text-white text-[10px] lg:text-[12px] cursor-pointer hover:underline ">Syarat dan Ketentuan Berlaku</p>
                </div>
            </div>
        </div>
    )
}

export default Services