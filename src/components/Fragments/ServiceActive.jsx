
const ServiceActive = () => {
    return (
        <div className="grid gap-y-5 p-6 bg-gradient-to-tl from-[#192DB7] to-[#5370D4] rounded-xl ">
            <div className="grid gap-5">
                <span className="px-[20px] py-[6] lg:px-[24px] lg:py-[8px] bg-slate-100 text-[#0F1E93] font-semibold w-fit rounded-full">Aktif</span>
                <div className="grid gap-4">
                    <h2 className="text-[24px] font-bold text-white">Akun Premium Individual ✨</h2>
                    <p className="text-white">Saat ini kamu sedang menggunakan akses akun premium</p>
                </div>
                <p>Berlaku hingga 31 Desember 2023</p>
            </div>
        </div>
    )
}

export default ServiceActive