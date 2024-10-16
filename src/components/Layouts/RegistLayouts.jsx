import Button from "../Elements/Button/Index"
import FormLogin from "../Fragments/FormLogin"
import FormRegist from "../Fragments/FormRegist"

const RegistLayouts = (props) => {
    const { tittle, text, textButton1, textButton2, type } = props
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
                {/* Form Login & Form Regist */}
                <FormRegist />

                {/* Button Masuk */}
                {/* <Button tittle={textButton1} google={textButton2} href="/home" /> */}
            </div>
        </div>
    )
}

export default RegistLayouts