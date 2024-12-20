const InputPassword = (props) => {
    const { type, placeholder, name, label, onChange } = props;
    return (
        <div
            className="py-[8px] px-[12px] lg:py-[14px] lg:px-[20px] rounded-full bg-transparent flex justify-between border-white border-[1px] border-opacity-25 outline-none focus-within:border-opacity-60">
            <div className="flex w-full">
                <img className="mr-2 lg:mr-4 w-[20px]" src="img/password.svg" />
                <input className="bg-transparent w-full p-0 outline-none focus:outline-none border-none"
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    label={label}
                    onChange={onChange}
                />
            </div>
            <img className="w-[20px]" src="img/eye-off.svg" alt="" />
        </div>
    )
}

export default InputPassword
