import MenuBar from "../Fragments/MenuBar"

const Navbar = () => {
    const username = localStorage.getItem("username")
    return (
        <nav className="py-[12px] px-[20px] lg:px-[80px] lg:py-[24px] bg-[#181A1C]">
            <div className="flex items-center justify-between gap-">
                <div
                    className="flex items-center text-white gap-x-[14px] text-[12px] lg:gap-x-[40px] lg:text-[18px] md:gap-x-[28px] md:text-[14px]">
                    <a href="/">
                        <img className="h-[20px] hidden lg:block lg:h-[44px]" src="img/logo-nav.svg" alt="" />
                        <img className="block lg:hidden" src="img/logo-mobile.svg" alt="" />
                    </a>
                    <a className="text-[14px] lg:text-[18px]" href="/home">Series</a>
                    <a className="text-[14px] lg:text-[18px]" href="">Film</a>
                    <a className="text-[14px] lg:text-[18px]" href="/list">Daftar Saya</a>
                </div>
                <div className="flex items-center text-white text-[14px] lg:text-[18px]">
                    Hi, {username}
                    <MenuBar />
                </div>
            </div>
        </nav>
    )
}

export default Navbar