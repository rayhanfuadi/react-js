
import Service from "@/components/Fragments/ServiceNotActive"
import Footer from "@/components/Layouts/Footer"
import List from "@/components/Layouts/List"
import Navbar from "@/components/Layouts/Navbar"
import useAuthStore from "@/stores/authStore"
import { useEffect, useState } from "react"
import RedirectLogin from "./RedirectLogin"


const Profile = () => {
    const user = useAuthStore((state) => state.user)
    const { isLoggedIn, checkSession, updatePassword, updateUsername, setUser } = useAuthStore();
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newUsername, setNewUsername] = useState('');
    const [usernameUpdated, setUsernameUpdated] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordUpdated, setPasswordUpdated] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        checkSession();
    }, [checkSession]);

    // Fungsi untuk menarik data user terbaru dari API
    const fetchUserData = async () => {
        try {
            const response = await fetch(`https://673ad4be339a4ce44519416d.mockapi.io/users/${user?.id}`);
            const data = await response.json();
            setUser(data); // Update store dengan data terbaru
        } catch (error) {
            console.error("Failed to fetch user data:", error);
        }
    };

    const handleUsernameChange = async (e) => {
        e.preventDefault();

        // Lakukan update username di API
        try {
            const success = await updateUsername(user?.id, newUsername);
            if (success) {
                // Setelah berhasil ubah username, kita ambil data terbaru dari API
                await fetchUserData();

                setUsernameUpdated(true);
                setNewUsername('');
            } else {
                setErrorMessage("Gagal mengubah username. Silakan coba lagi.");
            }
        } catch (error) {
            console.error("Failed to update username:", error);
            if (error.response && error.response.status === 409) {
                setErrorMessage("Username sudah digunakan. Silakan pilih username lain.");
            }
        }
    }

    const handlePasswordChange = async (e) => {
        e.preventDefault();

        // Validasi input
        if (!oldPassword) {
            setErrorMessage("Harap masukkan password lama.");
            return;
        }

        if (oldPassword !== user?.password) {
            setErrorMessage("Password lama tidak sesuai.");
            return;
        }

        if (newPassword !== confirmPassword) {
            setErrorMessage("Password baru dan konfirmasi password tidak cocok.");
            return;
        }

        // Lakukan update password di API
        try {
            const success = await updatePassword(user?.id, newPassword);
            if (success) {
                // Setelah berhasil ubah password, kita ambil data terbaru dari API
                await fetchUserData();

                setPasswordUpdated(true);
                setOldPassword('');
                setNewPassword('');
                setConfirmPassword('');
                setErrorMessage(null); // Reset error message
            } else {
                setErrorMessage("Gagal mengubah password. Silakan coba lagi.");
            }
        } catch (error) {
            setErrorMessage("Terjadi kesalahan saat mengubah password.", error);
        }
    };

    if (!isLoggedIn) {
        return <RedirectLogin />;
    }

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
                        <form action="" onSubmit={handleUsernameChange}>
                            <div className="flex gap-2 items-center px-4 py-2 bg-[#22282A] border-[1px] border-[#E7E3FC] border-opacity-25 rounded-lg mb-4 lg:mb-6">
                                <div className="grid w-full gap-1">
                                    <p className="text-[#9D9EA1] text-[14px] lg:text-[16px]">Nama Pengguna</p>
                                    <input className="bg-transparent border-none px-0 placeholder-[#fff] text-white font-semibold lg:text-[18px]"
                                        type="text"
                                        placeholder={user?.username}
                                        value={newUsername}
                                        onChange={(e) => setNewUsername(e.target.value)} />
                                    {/* <p className="text-white font-semibold lg:text-[18px]">{user?.username}</p> */}
                                </div>
                                <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700" type="submit">Ubah</button>
                            </div>
                        </form>
                        {usernameUpdated && <p className="text-green-400 text-sm mb-4">Password berhasil diubah!</p>}


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
                            {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
                            {passwordUpdated && <p className="text-green-400 text-sm mb-4">Password berhasil diubah!</p>}
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