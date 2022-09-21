import { TbPlant2 } from "react-icons/tb";
import CartWidget from "./CartWidget";
import { navBarOptions } from "../helpers/strings.js";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white drop-shadow-md font-poppins py-2">
      <div className="flex flex-col items-center md:flex md:flex-row md:px-20  md:items-center ">
        <NavLink to="/" className="flex flex-1 items-center text-3xl gap-1">
          <TbPlant2 />
          <p className=" font-averia font-bold">Botanika</p>
        </NavLink>

        <div className="md:flex-1">
          <ul className="flex  md:justify-center gap-2 md:gap-5 text-xl">
            {navBarOptions.map((op) => (
              <NavLink className="nav_link" key={op.id} to={`/category/${op.category}`}>
                {op.id}
              </NavLink>
            ))}
          </ul>
        </div>

        <NavLink to="/cart" className="md:flex md:flex-1 md:items-center md:justify-end text-3xls gap-2 text-xl">
          <CartWidget />
        </NavLink>
      </div>
    </nav>
    //
  );
};
export default Navbar;
