import { TbPlant2 } from "react-icons/tb";
import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <nav class="bg-white drop-shadow-md font-Poppins">
            <div class="px-20 flex items-center">
                <div class="flex flex-1 items-center text-3xl gap-5">
                    <TbPlant2 />
                    <p>Botanika</p>
                </div>
                <div class="flex-1">
                    <ul class="flex justify-center gap-5 text-xl ">
                        <li>Plantas</li>
                        <li>Macetas</li>
                        <li>Accesorios</li>
                    </ul>
                </div>
                <div class="flex flex-1 items-center justify-end text-3xls">
                    <CartWidget />
                </div>
            </div>
        </nav>
        //
    );
};
export default Navbar;
