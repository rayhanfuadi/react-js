const Input = (props) => {
    const { type = "email", placeholder, name, label, onChange } = props;
    return (
        <input type={type} className="bg-transparent w-full outline-none border-none p-0" placeholder={placeholder} name={name} label={label} onChange={onChange} />
    )
}

export default Input