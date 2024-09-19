import InputPassword from "../Elements/InputPassword/InputPassword"
import InputUser from "../Elements/InputUser/InputUser"
import Label from "../Elements/InputUser/Label"

const FormRegist = () => {
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
            </div>
            {/* Confirm Password */}
            <div className="grid gap-2">
                <Label label="Confirm Password" htmlFor="Password" />
                <InputPassword />
                <div className="flex justify-between px-2 text-[12px] lg:text-[16px]">
                    <a href="/login"><span class="opacity-70">sudah punya
                        akun?</span> Masuk</a>
                </div>
            </div>
        </form>
    )
}

export default FormRegist