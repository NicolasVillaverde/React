import { TbPlant2 } from "react-icons/tb";
import CartWidget from "./CartWidget";
import { navBarOptions } from "../helpers/strings.js";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white drop-shadow-md font-poppins py-2">
      <div className="px-20 flex items-center">
        <NavLink to="/" className="flex flex-1 items-center text-3xl gap-1">
          <TbPlant2 />
          <p className=" font-averia font-bold">Botanika</p>
        </NavLink>

        <div className="flex-1">
          <ul className="flex justify-center gap-5 text-xl ">
            {navBarOptions.map((op) => (
              <NavLink key={op.id} to={`/category/${op.category}`}>
                {op.id}
              </NavLink>
            ))}
          </ul>
        </div>

        <NavLink to="/cart" className="flex flex-1 items-center justify-end text-3xls gap-2 text-xl">
          <CartWidget />
        </NavLink>
      </div>
    </nav>
    //
  );
};
export default Navbar;
