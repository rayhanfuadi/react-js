const RegistPage = () => {
    return (
        <div className="bg-[url('../public/img/daftar.jpg')] w-full h-screen p-0 bg-fixed bg-center bg-cover bg-no-repeat">
            <div className="flex justify-center items-center h-screen p-[30px]">
                <div
                    className="p-[28px] lg:p-[40px] grid gap-[20px] lg:gap-[36px] text-white bg-[#181A1C] bg-opacity-80 w-[530px] origin-center rounded-xl">
                    <div className="flex justify-center">
                        <img className="w-[94px] lg:w-fit" src="img/logo-login.svg" alt="" />
                    </div>
                    <div className="grid gap-y-[6px] lg:gap-y-[8px]">
                        <h2 className="text-center font-semibold text-[18px] lg:text-[32px]">Daftar</h2>
                        <p className="text-center text-[12px] lg:text-[16px]">Selamat Datang</p>
                    </div>

                    {/* username */}
                    <div className="grid gap-2">
                        <label className="px-2 text-[12px] lg:text-[18px]" htmlFor="">Username</label>
                        <div
                            className="py-[8px] px-[12px] lg:py-[14px] lg:px-[20px] rounded-full bg-transparent flex justify-between border-white border-[1px] border-opacity-25 outline-none focus-within:border-opacity-60">
                            <div className="flex">
                                <img className="mr-2 lg:mr-4 w-[20px]" src="img/username.svg" />
                                <input className="bg-transparent outline-none border-none p-0" type="text" placeholder="Masukan Username" />
                            </div>
                        </div>
                    </div>

                    {/* password */}
                    <div className="grid gap-2">
                        <label className="px-2 text-[12px] lg:text-[18px]" htmlFor="">Password</label>
                        <div
                            className="py-[8px] px-[12px] lg:py-[14px] lg:px-[20px] rounded-full bg-transparent flex justify-between border-white border-[1px] border-opacity-25 outline-none focus-within:border-opacity-60">
                            <div className="flex">
                                <img className="mr-2 lg:mr-4 w-[20px]" src="img/password.svg" />
                                <input className="bg-transparent outline-none border-none p-0" type="text" placeholder="Masukan password" />
                            </div>
                            <img src="img/eye-off.svg" alt="" />
                        </div>
                    </div>

                    {/* Confirm password */}
                    <div className="grid gap-2">
                        <label className="px-2 text-[12px] lg:text-[18px]" htmlFor="">Password</label>
                        <div
                            className="py-[8px] px-[12px] lg:py-[14px] lg:px-[20px] rounded-full bg-transparent flex justify-between border-white border-[1px] border-opacity-25 outline-none focus-within:border-opacity-60">
                            <div className="flex">
                                <img className="mr-2 lg:mr-4 w-[20px]" src="img/password.svg" />
                                <input className="bg-transparent outline-none border-none p-0" type="text" placeholder="Masukan password" />
                            </div>
                            <img src="img/eye-off.svg" alt="" />
                        </div>
                        <div className="flex justify-between px-2 text-[12px] lg:text-[16px]">
                            <a href="/login"><span className="opacity-70">sudah punya
                                akun?</span> Masuk</a>
                            <a href="">Lupa Kata sandi</a>
                        </div>
                    </div>

                    {/* button regist */}
                    <div className="grid gap-2">
                        <a className="justify-center py-[8px] lg:py-[14px] lg:px-[20px] text-center rounded-full bg-[#3D4142] border-[#3D4142] border-[1px] border-opacity-25 outline-none focus:border-opacity-60"
                            href="">Daftar</a>
                        <p className="text-center">atau</p>
                        <div className="">
                            <a className=" items-center py-[8px] lg:py-[14px] lg:px-[20px] rounded-full bg-transparent flex justify-center gap-4 border-white border-[1px] border-opacity-25 outline-none focus:border-opacity-60"
                                href="#">
                                <img className="w-[18px]" src="img/gmail.png" alt="" />
                                Daftar dengan google</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistPage