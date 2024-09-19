const Navbar = () => {
    return (
        <nav className="py-[12px] px-[20px] lg:px-[80px] lg:py-[24px] bg-[#181A1C]">
            <div className="flex items-center justify-between gap-">
                <div
                    className="flex items-center text-white gap-x-[12px] text-[12px] lg:gap-x-[40px] lg:text-[18px] md:gap-x-[28px] md:text-[14px]">
                    <img className="h-[20px] lg:h-[44px]" src="img/logo-nav.svg" alt="" />
                    <a href="/login">Series</a>
                    <a href="">Film</a>
                    <a href="">Daftar Saya</a>
                </div>
                <div className="flex items-center gap-2">
                    <img className="w-[20px] h-[20px] lg:w-[40px] lg:h-[40px]" src="img/pengguna.png" alt="" />
                    <img className="w-[12px] h-[12px] lg:w-[24px] lg:h-[24px]" src=" img/arrowDown.svg" alt="" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar