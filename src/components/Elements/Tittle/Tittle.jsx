const Tittle = (props) => {
    const { tittle, rating } = props
    return (
        <div className="absolute w-full flex p-[16px] justify-between">
            <div className="flex">
                <p className="font-semibold text-[14px] lg:text-[18px]">{tittle}</p>
            </div>
            <div className="flex items-center gap-x-[8px]">
                <img src="img/stars.svg" width="12px" alt="" />
                <p className="text-[12px] lg:text-[16px]">{rating}</p>
            </div>
        </div>
    )
}

export default Tittle