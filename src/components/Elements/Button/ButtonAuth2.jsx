const ButtonAuth2 = (props) => {
    const { tittle, href } = props
    return (
        <a className=" items-center py-[8px] lg:py-[14px] lg:px-[20px] rounded-full bg-transparent flex justify-center gap-4 border-white border-[1px] border-opacity-25 outline-none focus:border-opacity-60 hover:bg-[#3D4142]"
            href={href}>
            <img className="w-[18px]" src="img/gmail.png" alt="" />
            <button>{tittle}</button>
        </a>
    )
}

export default ButtonAuth2