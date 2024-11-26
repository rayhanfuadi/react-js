import useAuthStore from "@/stores/authStore"
import ButtonAuth from "../Elements/Button/ButtonAuth"
import ButtonAuth2 from "../Elements/Button/ButtonAuth2"
import InputPassword from "../Elements/InputPassword/InputPassword"
import InputUser from "../Elements/InputUser/InputUser"
import Label from "../Elements/InputUser/Label"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';

const FormLogin = () => {
    const { login, error, loading } = useAuthStore();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const user = useAuthStore((state) => state.user)

    const handleLogin = async (e) => {
        e.preventDefault();

        // Validasi input
        if (!email || !password) {
            alert('Email dan password tidak boleh kosong.');
            return; // Hentikan eksekusi jika input kosong
        }

        const success = await login(email, password);
        if (success) {
            alert(`Login Berhasil, Selamat Datang ${user.username}`);
            navigate('/home'); // Arahkan ke halaman home setelah login berhasil
        } else {
            alert(error || 'Login gagal. Email atau password salah.');
        }
    };

    return (
        <>
            <form className="grid gap-[20px] lg:gap-[36px] onSubmit={handleLogin}">
                {/* Email */}
                <div className="grid gap-2">
                    <Label label="Email" />
                    <InputUser
                        label="Email"
                        type="email"
                        placeholder="Masukkan Email anda"
                        name="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                {/* Password */}
                <div className="grid gap-2">
                    <Label label="Password" htmlFor="Password" />
                    <InputPassword
                        label="Password"
                        type="password"
                        placeholder="Masukkan Password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="flex justify-between px-2 text-[12px] lg:text-[16px]">
                        <a href="/regist"><span className="opacity-70">belum punya
                            akun?</span> Daftar</a>
                        <a href="#">Lupa Kata sandi</a>
                    </div>
                </div>
                <div className="flex flex-col gap-y-2">
                    <ButtonAuth tittle={loading ? 'Loading...' : 'Login'} type="submit" onClick={handleLogin} disable={loading} />
                    <p className="text-center">atau</p>
                    <ButtonAuth2 tittle="Masuk Dengan Google" href="#" />
                </div>
            </form>
        </>
    )
}

export default FormLogin