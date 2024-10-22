const PopUpCard = (props) => {
    const { id, tittle, img } = props
    return (
        <div className="">
            <input type="checkbox" id={id} className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box bg-primary p-0 w-fit">
                    <img className="w-[350px] h-[175px] lg:w-[500px] lg:h-[250px] object-cover" src={img} alt="" />
                    <div className="flex flex-col px-[12px] mt-3 gap-3 lg:gap-5 lg:px-[24px] lg:mt-6">
                        <h3 className="text-[18px] lg:text-[24px] font-semibold">{tittle}</h3>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 lg:gap-5">
                                <div className="flex justify-center items-center rounded-full w-[36px] h-[36px] lg:w-[60px] lg:h-[60px]">
                                    <img src="img/play.svg" alt="" />
                                </div>
                                <div className="flex justify-center items-center rounded-full w-[36px] h-[36px] lg:w-[60px] lg:h-[60px] border-[1px] border-white">
                                    <img className="w-[20px] lg:w-[32px]" src="img/check.svg" alt="" />
                                </div>
                            </div>
                            <div className="flex justify-center items-center rounded-full w-[36px] h-[36px] lg:w-[60px] lg:h-[60px] border-[1px] border-white hover:bg-slate-100/50">
                                <img className="w-[20px] lg:w-[32px]" src="img/arrowDown.svg" alt="" />
                            </div>
                        </div>
                        <div className="flex items-center gap-3 lg:gap-5">
                            <div className="font-semibold px-2 py-1 lg:px-3 lg:py-1 bg-slate-700 rounded-full text-[12px] lg:text-[20px] ">
                                13+
                            </div>
                            <p className="font-semibold text-white text-[12px] lg:text-[20px]">16 Episode</p>
                        </div>
                        <div className="flex justify-end gap-2 lg:gap-4 mb-3 lg:mb-5">
                            <label htmlFor={id} className="btn text-white bg-slate-800 hover:bg-slate-900/80">Masukan List</label>
                        </div>
                    </div>
                </div>
                <label className="modal-backdrop" htmlFor={id}>Close</label>
            </div>
        </div>
    )
}

export default PopUpCard