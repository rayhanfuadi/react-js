import FormLogin from "../Fragments/FormLogin"

const AuthLayouts = (props) => {
    const { tittle, text } = props
    return (
        <div className="flex justify-center items-center h-full p-[30px]">
            <div
                className="p-[28px] lg:p-[40px] grid gap-[20px] lg:gap-[36px] text-white bg-[#181A1C] bg-opacity-80 w-[530px] origin-center rounded-xl">
                <div className="flex justify-center">
                    <img className="w-[94px] lg:w-fit" src="./img/logo-login.svg" alt="" />
                </div>
                <div className="grid gap-y-[6px] lg:gap-y-[8px]">
                    <h2 className="text-center font-semibold text-[18px] lg:text-[32px]">{tittle}</h2>
                    <p className="text-center text-[12px] lg:text-[16px]">{text}</p>
                </div>
                {/* Login Form */}
                <FormLogin />

                {/* Button Masuk */}
                <div className="grid gap-2">
                    <a className="justify-center font-semibold py-[8px] lg:py-[14px] lg:px-[20px] text-center rounded-full bg-[#3D4142] border-[#3D4142] border-[1px] border-opacity-25 outline-none focus:border-opacity-60 hover:bg-opacity-50"
                        href="/home">Masuk</a>
                    <p className="text-center">atau</p>
                    <div className="">
                        <a className=" items-center py-[8px] lg:py-[14px] lg:px-[20px] rounded-full bg-transparent flex justify-center gap-4 border-white border-[1px] border-opacity-25 outline-none focus:border-opacity-60 hover:bg-[#3D4142]"
                            href="#">
                            <img className="w-[18px]" src="img/gmail.png" alt="" />
                            Masuk dengan google</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthLayouts