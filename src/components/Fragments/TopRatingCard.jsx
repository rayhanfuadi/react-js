const TopRatingCard = (props) => {
    const { img, children } = props
    return (
        <div className="swiper-slide">
            <div className="bg-indigo-50 object-cover rounded-xl relative flex justify-start items-start">
                {children}
                <img className="w-full" src={img} alt="" />
            </div>
        </div>
    )
}

export default TopRatingCard