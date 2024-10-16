const ButtonAuth = (props) => {
    const { tittle, href, onClick, type = "button" } = props
    const handleClick = () => {
        console.log('clicked')
    }
    return (
        <button className="w-full justify-center font-semibold py-[8px] lg:py-[14px] lg:px-[20px] text-center rounded-full bg-[#3D4142] border-[#3D4142] border-[1px] border-opacity-25 outline-none focus:border-opacity-60 hover:bg-opacity-50"
            type={type}
            onClick={onClick}
        >
            {tittle}
        </button>
    )
}

export default ButtonAuth