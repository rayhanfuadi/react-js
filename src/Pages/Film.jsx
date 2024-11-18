import Navbar from "../components/Layouts/Navbar"
import CarouselSwiper from "../components/Layouts/CarouselSwiper";
import TopRating from "../components/Layouts/TopRating";
import FilmTranding from "@/components/Layouts/FilmTranding";
import RilisBaru from "@/components/Layouts/RilisBaru";
import Footer from "@/components/Layouts/Footer";
import HeroFilm from "@/components/Layouts/HeroFilm";
import useAuthStore from "@/stores/authStore";
import { useEffect } from "react";
import RedirectLogin from "./RedirectLogin";

const Film = () => {
    const { isLoggedIn, checkSession } = useAuthStore();
    useEffect(() => {
        checkSession();
    }, [checkSession]);
    if (!isLoggedIn) {
        return <RedirectLogin />;
    }

    return (
        <div className="bg-primary">
            {/* Navbar Start */}
            <Navbar />

            {/* HeroSection */}
            <HeroFilm />

            {/* Carousel Swipper JS */}
            <CarouselSwiper />

            {/* Top Rating */}
            <TopRating />

            {/* Film Tranding */}
            <FilmTranding />

            {/* Rilis Baru */}
            <RilisBaru />

            {/* Footer */}
            <Footer />
        </div >
    )
}

export default Film