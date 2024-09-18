import Input from "./Input"

const InputUser = (props) => {
    return (
        <div
            className="py-[8px] px-[12px] lg:py-[14px] lg:px-[20px] rounded-full bg-transparent flex justify-between border-white border-[1px] border-opacity-25 outline-none focus-within:border-opacity-60">
            <div className="flex">
                <img className="mr-2 lg:mr-4 w-[20px]" src="img/username.svg" />
                <Input type="text" placeholder="Masukan Username" />
            </div>
        </div>
    )
}

export default InputUser
