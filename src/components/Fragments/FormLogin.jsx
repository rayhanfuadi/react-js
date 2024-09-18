import InputPassword from "../Elements/InputPassword/InputPassword"
import InputUser from "../Elements/InputUser/InputUser"
import Label from "../Elements/InputUser/Label"

const FormLogin = () => {
    return (
        <form className="grid gap-[20px] lg:gap-[36px]" action="">
            {/* Username */}
            <div className="grid gap-2">
                <Label label="Username" htmlFor="username" />
                <InputUser />
            </div>
            {/* Password */}
            <div className="grid gap-2">
                <Label label="Password" htmlFor="Password" />
                <InputPassword />
                <div className="flex justify-between px-2 text-[12px] lg:text-[16px]">
                    <a href="/regist"><span class="opacity-70">belum punya
                        akun?</span> Daftar</a>
                    <a href="#">Lupa Kata sandi</a>
                </div>
            </div>
        </form>
    )
}

export default FormLogin