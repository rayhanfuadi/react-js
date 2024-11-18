import FormRegist from "../Fragments/FormRegist"

const RegistLayouts = (props) => {
    const { tittle, text } = props
    return (
        <div className="flex justify-center items-center h-full p-[30px]">
            <div className="p-[28px] lg:p-[40px] grid gap-[16px] lg:gap-[24px] text-white bg-[#181A1C] bg-opacity-80 w-[530px] origin-center rounded-xl">
                <div className="flex justify-center">
                    <img className="w-[94px] lg:w-fit" src="./img/logo-login.svg" alt="" />
                </div>
                <div className="grid gap-y-[2px] lg:gap-y-[4px]">
                    <h2 className="text-center font-semibold text-[18px] lg:text-[32px]">{tittle}</h2>
                    <p className="text-center text-[12px] lg:text-[16px]">{text}</p>
                </div>
                {/* Form Login & Form Regist */}
                <FormRegist />
            </div>
        </div>
    )
}

export default RegistLayouts