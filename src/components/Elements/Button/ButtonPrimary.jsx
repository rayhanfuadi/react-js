const ButtonPrimary = (props) => {
    const { text } = props
    return (
        <a href="">
            <button className="text-white px-[22px] py-[6px] text-[12px] lg:text-[16px] font-bold bg-[#2F3334] hover:bg-primary rounded-full">{text}</button>
        </a>
    )
}

export default ButtonPrimary