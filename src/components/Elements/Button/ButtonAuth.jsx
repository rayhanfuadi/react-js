const ButtonAuth = (props) => {
    const { tittle, onClick, type, disable } = props
    return (
        <button className="w-full justify-center font-semibold py-[8px] lg:py-[14px] lg:px-[20px] text-center rounded-full bg-[#3D4142] border-[#3D4142] border-[1px] border-opacity-25 outline-none focus:border-opacity-60 hover:bg-opacity-50"
            type={type}
            onClick={onClick}
            disabled={disable}
        >
            {tittle}
        </button>
    )
}

export default ButtonAuth