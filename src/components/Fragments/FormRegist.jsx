import useAuthStore from "@/stores/authStore"
import ButtonAuth from "../Elements/Button/ButtonAuth"
import ButtonAuth2 from "../Elements/Button/ButtonAuth2"
import InputPassword from "../Elements/InputPassword/InputPassword"
import InputUser from "../Elements/InputUser/InputUser"
import Label from "../Elements/InputUser/Label"
import { useState } from 'react';

const FormRegist = () => {
    const { register, error, loading } = useAuthStore();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        // Mencegah form untuk melakukan reload halaman
        e.preventDefault();

        const success = await register(username, email, password);
        if (success) {
            alert('Registration successful!');
        } else {
            alert(error || 'Registration failed.');
        }
    };

    return (
        <div>
            <form className="grid gap-[16px] lg:gap-[24px]" onSubmit={handleRegister}>
                {/* Username */}
                <div className="grid gap-2">
                    <Label label="Username" htmlFor="username" />
                    <InputUser
                        placeholder="Masukkan Username"
                        type="text"
                        onChange={(e) => setUsername(e.target.value)} />
                </div>
                {/* Email */}
                <div className="grid gap-2">
                    <Label label="Email" htmlFor="email" />
                    <InputUser
                        placeholder="Masukkan Email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                {/* Password */}
                <div className="grid gap-2">
                    <Label label="Password" htmlFor="Password" />
                    <InputPassword
                        placeholder="Masukkan password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="flex justify-between px-2 text-[12px] lg:text-[16px]">
                    <a href="/login"><span className="opacity-70">sudah punya akun?</span>Masuk</a>
                </div>
                <div className="flex flex-col gap-y-2">
                    <ButtonAuth type="submit" tittle={loading ? 'Loading...' : 'Daftar Sekarang'} disabled={loading} />
                    <p className="text-center">Atau</p>
                    <ButtonAuth2 type="submit" tittle="Daftar Dengan Google" href="#" />
                </div>
            </form>


        </div>
    )
}

export default FormRegist