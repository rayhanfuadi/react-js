import Footer from "@/components/Layouts/Footer"
import Navbar from "@/components/Layouts/Navbar"
import WhyServices from "@/components/Layouts/WhyServices"
import useAuthStore from "@/stores/authStore";
import RedirectLogin from "./RedirectLogin";
import { useEffect } from "react";
import Services from "@/components/Fragments/Services";

const Langganan = () => {
    const { isLoggedIn, checkSession } = useAuthStore();
    useEffect(() => {
        checkSession();
    }, [checkSession]);

    if (!isLoggedIn) {
        return <RedirectLogin />;
    }
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
                        <Services packet="Individual" price="Mulai dari Rp49,990/bulan" account="1 Akun" quality="Kualitas 720p" />
                        {/* item 2 */}
                        <Services packet="Berdua" price="Mulai dari Rp79,990/bulan" account="2 Akun" quality="Kualitas 1080p" />
                        {/* item 3 */}
                        <Services packet="Keluarga" price="Mulai dari Rp159,990/bulan" account="5-7 Akun" quality="Kualitas 4K" />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Langganan