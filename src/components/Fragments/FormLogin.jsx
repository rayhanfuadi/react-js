import ButtonAuth from "../Elements/Button/ButtonAuth"
import ButtonAuth2 from "../Elements/Button/ButtonAuth2"
import InputPassword from "../Elements/InputPassword/InputPassword"
import InputUser from "../Elements/InputUser/InputUser"
import Label from "../Elements/InputUser/Label"

const FormLogin = () => {
    const handleLogin = (e) => {
        e.preventDefault()
        localStorage.setItem("username", e.target.username.value)
        localStorage.setItem("password", e.target.password.value)
        console.log('login')
        window.location.href = "/home"
    }
    return (
        <form className="grid gap-[20px] lg:gap-[36px]" onSubmit={handleLogin}>
            {/* Username */}
            <div className="grid gap-2">
                <Label label="Username" />
                <InputUser
                    label="Email"
                    type="text"
                    placeholder="Masukkan Username"
                    name="username"
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
                />
                <div className="flex justify-between px-2 text-[12px] lg:text-[16px]">
                    <a href="/regist"><span class="opacity-70">belum punya
                        akun?</span> Daftar</a>
                    <a href="#">Lupa Kata sandi</a>
                </div>
            </div>
            <div className="flex flex-col gap-y-2">
                <ButtonAuth tittle="Masuk" href="#" type="submit" />
                <p className="text-center">atau</p>
                <ButtonAuth2 tittle="Masuk Dengan Google" href="#" />
            </div>
        </form>
    )
}

export default FormLogin