const ButtonPrimary = (props) => {
    const { text } = props
    return (
        <a href="">
            <button className="text-white px-[24px] py-[8px] text-[12px] lg:text-[16px] font-semibold bg-[#2F3334] hover:bg-primary rounded-full">{text}</button>
        </a>
    )
}

export default ButtonPrimary