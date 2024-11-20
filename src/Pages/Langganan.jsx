import Footer from "@/components/Layouts/Footer"
import Navbar from "@/components/Layouts/Navbar"
import WhyServices from "@/components/Layouts/WhyServices"

const Langganan = () => {
    return (
        <div className="bg-primary">
            <Navbar />

            <WhyServices />

            <div className="bg-[#22282A] p-5 lg:px-[80px] lg:py-[40px]">
                <div className="grid gap-[20px] lg:gap-[40px]">
                    <div className="grid gap-2 lg:gap-3">
                        <h2 className="text-white text-center text-[18px] lg:text-[32px] font-semibold leading-[110%] ">Pilih Paketmu</h2>
                        <p className="text-white text-center text-[12px] lg:text-[16px] font-medium">Temukan paket sesuai kebutuhanmu!</p>
                    </div>

                    <div className="grid lg:flex justify-center gap-[36px] lg:gap-[72px]">
                        {/* item 1 */}
                        <div className="p-5 grid gap-[18px] lg:gap-[38px] rounded-xl bg-gradient-to-tl from-[#192DB7] to-[#5370D4] hover:scale-[1.07] duration-300 cursor-pointer">
                            <div className="grid gap-[12px] lg:gap-[24px]">
                                <div className="bg-[#3D4142] text-white px-[12px] py-[6px] lg:px-[24px] lg:py-[12px] rounded-full font-semibold w-fit">Individual</div>
                                <div className="grid gap-1">
                                    <p className="text-white text-[12px] lg:text-[14px]">Mulai dari Rp49,990/bulan</p>
                                    <p className="text-white text-[12px] lg:text-[14px]">1 Akun</p>
                                </div>
                                <div className="grid gap-1 lg:gap-2">
                                    <p className="flex gap-2 text-white text-[12px] lg:text-[14px]"><img src="../img/check2.svg" alt="" />Tidak ada iklan</p>
                                    <p className="flex gap-2 text-white text-[12px] lg:text-[14px]"><img src="../img/check2.svg" alt="" />Kualitas 720p</p>
                                    <p className="flex gap-2 text-white text-[12px] lg:text-[14px]"><img src="../img/check2.svg" alt="" />Donwload konten pilihan</p>
                                </div>
                            </div>
                            <div className="border border-b-[1px] border-white/20"></div>
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <div className="w-fit bg-white text-[#0F1E93] font-semibold rounded-full leading-[140%] px-[12px] py-[4px] lg:px-[24px] lg:py-[8px]">Langganan</div>
                                <p className="text-white text-[10px] lg:text-[12px] cursor-pointer hover:underline ">Syarat dan Ketentuan Berlaku</p>
                            </div>
                        </div>
                        {/* item 2 */}
                        <div className="p-5 grid gap-[18px] lg:gap-[38px] rounded-xl bg-gradient-to-tl from-[#192DB7] to-[#5370D4] hover:scale-[1.07] duration-300 cursor-pointer">
                            <div className="grid gap-[12px] lg:gap-[24px]">
                                <div className="bg-[#3D4142] text-white px-[12px] py-[6px] lg:px-[24px] lg:py-[12px] rounded-full font-semibold w-fit">Berdua</div>
                                <div className="grid gap-1">
                                    <p className="text-white text-[12px] lg:text-[14px]">Mulai dari Rp79,990/bulan</p>
                                    <p className="text-white text-[12px] lg:text-[14px]">2 Akun</p>
                                </div>
                                <div className="grid gap-1 lg:gap-2">
                                    <p className="flex gap-2 text-white text-[12px] lg:text-[14px]"><img src="../img/check2.svg" alt="" />Tidak ada iklan</p>
                                    <p className="flex gap-2 text-white text-[12px] lg:text-[14px]"><img src="../img/check2.svg" alt="" />Kualitas 1080p</p>
                                    <p className="flex gap-2 text-white text-[12px] lg:text-[14px]"><img src="../img/check2.svg" alt="" />Donwload konten pilihan</p>
                                </div>
                            </div>
                            <div className="border border-b-[1px] border-white/20"></div>
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <div className="w-fit bg-white text-[#0F1E93] font-semibold rounded-full leading-[140%] px-[12px] py-[4px] lg:px-[24px] lg:py-[8px]">Langganan</div>
                                <p className="text-white text-[10px] lg:text-[12px] cursor-pointer hover:underline ">Syarat dan Ketentuan Berlaku</p>
                            </div>
                        </div>
                        {/* item 3 */}
                        <div className="p-5 grid gap-[18px] lg:gap-[38px] rounded-xl bg-gradient-to-tl from-[#192DB7] to-[#5370D4] hover:scale-[1.07] duration-300 cursor-pointer">
                            <div className="grid gap-[12px] lg:gap-[24px]">
                                <div className="bg-[#3D4142] text-white px-[12px] py-[6px] lg:px-[24px] lg:py-[12px] rounded-full font-semibold w-fit">Keluarga</div>
                                <div className="grid gap-1">
                                    <p className="text-white text-[12px] lg:text-[14px]">Mulai dari Rp159,990/bulan</p>
                                    <p className="text-white text-[12px] lg:text-[14px]">5-7 Akun</p>
                                </div>
                                <div className="grid gap-1 lg:gap-2">
                                    <p className="flex gap-2 text-white text-[12px] lg:text-[14px]"><img src="../img/check2.svg" alt="" />Tidak ada iklan</p>
                                    <p className="flex gap-2 text-white text-[12px] lg:text-[14px]"><img src="../img/check2.svg" alt="" />Kualitas 4K</p>
                                    <p className="flex gap-2 text-white text-[12px] lg:text-[14px]"><img src="../img/check2.svg" alt="" />Donwload konten pilihan</p>
                                </div>
                            </div>
                            <div className="border border-b-[1px] border-white/20"></div>
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <div className="w-fit bg-white text-[#0F1E93] font-semibold rounded-full leading-[140%] px-[12px] py-[4px] lg:px-[24px] lg:py-[8px]">Langganan</div>
                                <p className="text-white text-[10px] lg:text-[12px] cursor-pointer hover:underline ">Syarat dan Ketentuan Berlaku</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Langganan