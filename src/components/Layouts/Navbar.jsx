import MenuBar from "../Fragments/MenuBar"

const Navbar = () => {
    return (
        <nav className="py-[12px] px-[20px] lg:px-[80px] lg:py-[24px] bg-[#181A1C]">
            <div className="flex items-center justify-between gap-">
                <div
                    className="flex items-center text-white gap-x-[12px] text-[12px] lg:gap-x-[40px] lg:text-[18px] md:gap-x-[28px] md:text-[14px]">
                    <a href="/">
                        <img className="h-[20px] lg:h-[44px]" src="img/logo-nav.svg" alt="" />
                    </a>
                    <a href="">Series</a>
                    <a href="">Film</a>
                    <a href="">Daftar Saya</a>
                </div>
                <MenuBar />
            </div>
        </nav>
    )
}

export default Navbar