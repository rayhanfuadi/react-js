
import Service from "@/components/Fragments/Service"
import Footer from "@/components/Layouts/Footer"
import List from "@/components/Layouts/List"
import Navbar from "@/components/Layouts/Navbar"
import useAuthStore from "@/stores/authStore"
import { useEffect } from "react"
import RedirectLogin from "./RedirectLogin"


const Profile = () => {
    const { isLoggedIn, checkSession } = useAuthStore();
    useEffect(() => {
        checkSession();
    }, [checkSession]);
    if (!isLoggedIn) {
        return <RedirectLogin />;
    }

    const user = useAuthStore((state) => state.user)
    return (
        <div className="bg-primary h-full">
            <Navbar />
            <div className="grid gap-5 p-5 lg:px-[80px] lg:py-[40px] lg:grid lg:grid-cols-12">
                <div className="lg:col-span-6 lg:order-last lg:ml-[80px]">
                    <Service />
                </div>

                <div className="lg:col-span-6 profile grid gap-6 lg:gap-y-8">
                    <h1 className="text-white font-bold text-xl lg:text-[32px]">Profile Saya</h1>
                    <div className="grid gap-y-8">
                        {/* foto Profile */}
                        <div className="flex gap-6 items-center">
                            <img src="img/pengguna.png" alt="" />
                            <div className="flex flex-col gap-2">
                                <button className="px-[12px] py-[8px] text-[14px] text-secondary border-secondary border-[1px] rounded-full hover:text-white hover:border-white">Ubah Foto</button>
                                <div className="flex text-gray items-center gap-1">
                                    <img src="img/upload.png" alt="" />
                                    <p className="text-[12px]">Maksimal 2MB</p>
                                </div>
                            </div>
                        </div>

                        {/* input Nama Pengguna */}
                        <div className="flex gap-2 items-center px-4 py-2 bg-[#22282A] border-[1px] border-[#E7E3FC] border-opacity-25 rounded-lg">
                            <div className="grid w-full gap-1">
                                <p className="text-[#9D9EA1] text-[14px] lg:text-[16px]">Nama Pengguna</p>
                                {/* <input className="p-0 m-0 bg-transparent outline-none" type="text" placeholder="William" /> */}
                                <p className="text-white font-semibold lg:text-[18px]">{user?.username}</p>
                            </div>
                            <img className="object-contain cursor-pointer" src="img/edit.png" alt="" />
                        </div>

                        {/* Input Email */}
                        <div className="flex gap-2 items-center px-4 py-2 bg-[#22282A] border-[1px] border-[#E7E3FC] border-opacity-25 rounded-lg">
                            <div className="grid w-full gap-1">
                                <p className="text-[#9D9EA1] text-[14px] lg:text-[16px]">Email</p>
                                <p className="text-[#9D9EA1] font-semibold lg:text-[18px]">oke.rayhan@gmail.com</p>
                            </div>
                            <img className="object-contain cursor-pointer hidden" src="img/edit.png" alt="" />
                        </div>

                        {/* Input Katasandi */}
                        <div className="flex gap-2 items-center px-4 py-2 bg-[#22282A] border-[1px] border-[#E7E3FC] border-opacity-25 rounded-lg">
                            <div className="grid w-full gap-1">
                                <p className="text-[#9D9EA1] text-[14px] lg:text-[16px]">Password</p>
                                <p className="text-[#9D9EA1] font-semibold lg:text-[18px]">*************</p>
                            </div>
                            <img className="object-contain cursor-pointer" src="img/edit.png" alt="" />
                        </div>

                    </div>
                </div>
            </div>

            {/* Daftar Saya */}
            <List />

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Profile