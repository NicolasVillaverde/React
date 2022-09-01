import { TbPlant2 } from "react-icons/tb";
import CartWidget from "./CartWidget";
import { navBarOptions } from "../helpers/strings.js";

const Navbar = () => {
    return (
        <nav className="bg-white drop-shadow-md font-poppins py-2">
            <div className="px-20 flex items-center">
                <div className="flex flex-1 items-center text-3xl gap-1">
                    <TbPlant2 />
                    <p className=" font-suranna font-bold">Botanika</p>
                </div>
                <div className="flex-1">
                    <ul className="flex justify-center gap-5 text-xl ">
                        {navBarOptions.map((op) => (
                            <li key={op.id}>{op.category}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-1 items-center justify-end text-3xls gap-2 text-xl">
                    <CartWidget />
                </div>
            </div>
        </nav>
        //
    );
};
export default Navbar;
