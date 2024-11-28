import MenuBar from "../Fragments/MenuBar"
import useAuthStore from "@/stores/authStore";

const Navbar = () => {
    const user = useAuthStore((state) => state.user);
    return (
        <div className="container py-[12px] lg:py-[24px] bg-[#181A1C]">
            <div className="flex items-center justify-between gap-">
                <div
                    className="flex items-center text-white gap-x-[14px] text-[12px] lg:gap-x-[40px] lg:text-[18px] md:gap-x-[28px] md:text-[14px]">
                    <a href="/">
                        <img className="h-[20px] hidden lg:block lg:h-[44px]" src="img/logo-nav.svg" alt="" />
                        <img className="block lg:hidden" src="img/logo-mobile.svg" alt="" />
                    </a>
                    <a className="text-[12px] lg:text-[18px]" href="/home">Series</a>
                    <a className="text-[12px] lg:text-[18px]" href="/film">Film</a>
                    <a className="text-[12px] lg:text-[18px]" href="/list">Daftar Saya</a>
                    <a className="text-[12px] lg:text-[18px]" href="/admin">Admin</a>
                </div>
                <div className="flex items-center text-white text-[12px] lg:text-[18px]">
                    <p className="hidden lg:block ">
                        Hi, {``}{user?.username}
                    </p>
                    <MenuBar />
                </div>
            </div>
        </div>
    )
}

export default Navbar