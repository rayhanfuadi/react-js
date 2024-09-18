const Input = (props) => {
    const { type, placeholder, name } = props;
    return (
        <input type={type} className="bg-transparent outline-none border-none p-0" placeholder={placeholder} name={name} />
    )
}

export default Input