const Button = (props) => {

    const { tittle, google, href } = props
    return (
        <div className="grid gap-2">
            <a className="justify-center font-semibold py-[8px] lg:py-[14px] lg:px-[20px] text-center rounded-full bg-[#3D4142] border-[#3D4142] border-[1px] border-opacity-25 outline-none focus:border-opacity-60 hover:bg-opacity-50"
                href={href}>{tittle}</a>
            <p className="text-center">atau</p>
            <div className="">
                <a className=" items-center py-[8px] lg:py-[14px] lg:px-[20px] rounded-full bg-transparent flex justify-center gap-4 border-white border-[1px] border-opacity-25 outline-none focus:border-opacity-60 hover:bg-[#3D4142]"
                    href="#">
                    <img className="w-[18px]" src="img/gmail.png" alt="" />
                    {google}</a>
            </div>
        </div>
    )
}

export default Button