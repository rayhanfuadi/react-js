const TopRatingCard = (props) => {
    const { img, children, justify } = props
    return (
        <div className="swiper-slide w-full">
            <div className={`bg-indigo-50 rounded-xl relative flex justify-${justify} items-start`}>
                {children}
                <img className="w-full" src={img} alt="" />
            </div>
        </div>
    )
}

export default TopRatingCard