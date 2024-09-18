const Label = (props) => {
    const { label, htmlFor } = props
    return (
        <label className="px-2 text-[12px] lg:text-[18px]" htmlFor={htmlFor}>
            {label}
        </label >
    )
}

export default Label