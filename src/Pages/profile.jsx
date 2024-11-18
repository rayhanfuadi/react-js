
import Service from "@/components/Fragments/Service"
import Footer from "@/components/Layouts/Footer"
import List from "@/components/Layouts/List"
import Navbar from "@/components/Layouts/Navbar"
import useAuthStore from "@/stores/authStore"
import { useEffect, useState } from "react"
import RedirectLogin from "./RedirectLogin"


const Profile = () => {
    const { isLoggedIn, checkSession } = useAuthStore();
    const { updatePassword } = useAuthStore();
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordUpdated, setPasswordUpdated] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        checkSession();
    }, [checkSession]);
    if (!isLoggedIn) {
        return <RedirectLogin />;
    }

    const handlePasswordChange = async (e) => {
        e.preventDefault();
        console.log("Old Password:", oldPassword);
        console.log("New Password:", newPassword);
        console.log("Confirm Password:", confirmPassword);

        if (!oldPassword) {
            setErrorMessage("Harap masukkan password lama.");
            return;
        }

        if (oldPassword !== user.password) {
            setErrorMessage("Password lama tidak sesuai.");
            return;
        }

        if (newPassword !== confirmPassword) {
            setErrorMessage("Password baru dan konfirmasi password tidak cocok.");
            return;
        }

        try {
            const success = await updatePassword(user.id, newPassword);
            if (success) {
                alert('Password berhasil diubah!');
                window.location.reload(); // Refresh halaman
            } else {
                alert('Gagal mengubah password!');
            }
        } catch (err) {
            console.error("Error updating password:", err);
        }
    };

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
                    <div className="grid">
                        {/* foto Profile */}
                        <div className="flex gap-6 items-center mb-4 lg:mb-6">
                            <img className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full border border-slate-300" src={user?.avatar} alt="" />
                            <div className="flex flex-col gap-2">
                                <button className="px-[12px] py-[8px] text-[14px] text-secondary border-secondary border-[1px] rounded-full hover:text-white hover:border-white">Ubah Foto</button>
                                <div className="flex text-gray items-center gap-1">
                                    <img src="img/upload.png" alt="" />
                                    <p className="text-[12px]">Maksimal 2MB</p>
                                </div>
                            </div>
                        </div>

                        {/* input Nama Pengguna */}
                        <div className="flex gap-2 items-center px-4 py-2 bg-[#22282A] border-[1px] border-[#E7E3FC] border-opacity-25 rounded-lg mb-4 lg:mb-6">
                            <div className="grid w-full gap-1">
                                <p className="text-[#9D9EA1] text-[14px] lg:text-[16px]">Nama Pengguna</p>
                                {/* <input className="p-0 m-0 bg-transparent outline-none" type="text" placeholder="William" /> */}
                                <p className="text-white font-semibold lg:text-[18px]">{user?.username}</p>
                            </div>
                            <img className="object-con  tain cursor-pointer" src="img/edit.png" alt="" />
                        </div>

                        {/* Input Email */}
                        <div className="flex gap-2 items-center px-4 py-2 bg-[#22282A] border-[1px] border-[#E7E3FC] border-opacity-25 rounded-lg mb-4 lg:mb-6">
                            <div className="grid w-full gap-1">
                                <p className="text-[#9D9EA1] text-[14px] lg:text-[16px]">Email</p>
                                <p className="text-[#9D9EA1] font-semibold lg:text-[18px]">{user?.email}</p>
                            </div>
                            <img className="object-contain cursor-pointer hidden" src="img/edit.png" alt="" />
                        </div>

                        {/* Input Katasandi */}
                        <form action="" onSubmit={handlePasswordChange}>
                            <h2 className="text-white font-semibold text-[18px] pl-1 mb-1 lg:mb-2">Ubah Password</h2>
                            <div className="flex gap-2 items-center px-4 py-2 bg-[#22282A] border-[1px] border-[#E7E3FC] border-opacity-25 rounded-lg mb-4 lg:mb-6">
                                <div className="grid w-full gap-1">
                                    <p className="text-[#9D9EA1] text-[14px] lg:text-[16px]">Password Lama</p>
                                    <input className="bg-transparent border-none px-0"
                                        type="password"
                                        placeholder="Password Lama"
                                        value={oldPassword}
                                        onChange={(e) => setOldPassword(e.target.value)} />
                                </div>
                                <img className="object-contain cursor-pointer" src="img/edit.png" alt="" />
                            </div>

                            <div className="flex gap-2 items-center px-4 py-2 bg-[#22282A] border-[1px] border-[#E7E3FC] border-opacity-25 rounded-lg mb-4 lg:mb-6">
                                <div className="grid w-full gap-1">
                                    <p className="text-[#9D9EA1] text-[14px] lg:text-[16px]">Password Baru</p>
                                    <input className="bg-transparent border-none px-0"
                                        type="password"
                                        placeholder="Password Baru"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)} />
                                </div>
                                <img className="object-contain cursor-pointer" src="img/edit.png" alt="" />
                            </div>

                            <div className="flex gap-2 items-center px-4 py-2 bg-[#22282A] border-[1px] border-[#E7E3FC] border-opacity-25 rounded-lg mb-4 lg:mb-6">
                                <div className="grid w-full gap-1">
                                    <p className="text-[#9D9EA1] text-[14px] lg:text-[16px]">Konfirmasi Password Baru</p>
                                    <input className="bg-transparent border-none px-0"
                                        type="password"
                                        placeholder="Konfirmasi Password Baru"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)} />
                                </div>
                                <img className="object-contain cursor-pointer" src="img/edit.png" alt="" />
                            </div>
                            {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
                            {passwordUpdated && <p className="text-green-500 text-sm">Password berhasil diubah!</p>}
                            <button
                                className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-indigo-700"
                                type="submit"
                            >
                                Ubah Password
                            </button>
                        </form>

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