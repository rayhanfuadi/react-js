
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import useAuthStore from "@/stores/authStore"
import { useNavigate } from "react-router-dom";
export const MenuBar = () => {
    const { logout } = useAuthStore();
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const user = useAuthStore((state) => state.user);
    return (
        <div className="relative flex justify-end">
            <DropdownMenu className="flex justify-end w-full">
                <DropdownMenuTrigger asChild className="border-none hover:bg-transparent active:outline-none active:border-none text-white">
                    <Button variant="outline" className="flex items-center gap-2">
                        {/* <img className="w-[24px] h-[24px] lg:w-[40px] lg:h-[40px] rounded-full" src="img/pengguna.png" alt="" /> */}
                        <img className="w-[24px] h-[24px] lg:w-[40px] lg:h-[40px] rounded-full" src={user?.avatar} alt="" />
                        <img className="w-[24px] h-[24px] lg:w-[24px] lg:h-[24px]" src=" img/arrowDown.svg" alt="" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="absolute  flex flex-col -right-10 py-[8px] w-auto bg-primary text-white border-none">
                    <DropdownMenuLabel className="w-[150px] flex items-center px-[12px] py-[8px] hover:bg-[#0f1011] hover:text-indigo-500 cursor-pointer">
                        <a className="flex gap-2" href="/profile">
                            <img className="w-[20px]" src="img/user.svg" alt="" />
                            Profil Saya
                        </a>
                    </DropdownMenuLabel>
                    <DropdownMenuLabel className="w-[150px] flex items-center px-[12px] py-[8px] hover:bg-[#0f1011] hover:text-indigo-500 cursor-pointer">
                        <a className="flex gap-2" href="/langganan">
                            <img className="w-[20px]" src="img/star.svg" alt="" />
                            Ubah Premium
                        </a>
                    </DropdownMenuLabel>
                    <button onClick={handleLogout}>
                        <DropdownMenuLabel className="w-[150px] flex items-center gap-2 px-[12px] py-[8px] hover:bg-[#0f1011] hover:text-indigo-500 cursor-pointer">
                            <img className="w-[20px]" src="img/logout.svg" alt="" />
                            Logout
                        </DropdownMenuLabel>
                    </button>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default MenuBar