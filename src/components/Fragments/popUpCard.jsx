

const PopUpCard = (props) => {
    const { tittle, img } = props

    // const [film, setFilm] = useState([
    //     {
    //         id: 1,
    //         tittle: "Suzume",
    //         badge: <BadgeBiru />,
    //         img: "img/film/t1.png",
    //     },
    //     {
    //         id: 2,
    //         tittle: "Jurassic World",
    //         badge: <BadgeBiru />,
    //         img: "img/film/t2.png",
    //     },
    //     {
    //         id: 3,
    //         tittle: "Sonic 2",
    //         badge: <BadgeBiru />,
    //         img: "img/film/t3.png",
    //     },
    //     {
    //         id: 4,
    //         tittle: "All Of Us Are Dead",
    //         badge: <BadgeBiru />,
    //         img: "img/film/t4.png",
    //     },
    //     {
    //         id: 5,
    //         tittle: "Big Hero 6",
    //         badge: <BadgeBiru />,
    //         img: "img/film/t5.png",
    //     },
    //     {
    //         id: 6,
    //         tittle: "Suzume",
    //         badge: <BadgeBiru />,
    //         img: "img/film/t6.png",
    //     },
    //     {
    //         id: 7,
    //         tittle: "Jurassic World",
    //         badge: <BadgeBiru />,
    //         img: "img/film/t2.png",
    //     },
    //     {
    //         id: 8,
    //         tittle: "Sonic 2",
    //         badge: <BadgeBiru />,
    //         img: "img/film/t3.png",
    //     }
    // ])

    return (
        <div className="">
            <div className="" >
                <img className="w-[300px] h-[150px] lg:w-[500px] lg:h-[250px] object-cover" src={img} alt="" />
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
                </div>
            </div>
        </div>
    )
}

export default PopUpCard