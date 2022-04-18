import CartWidget from "./CartWidget";
const Navbar = () => {
    return (
        <div class="navbar bg-base-100 bg-black">
            <div class="flex-1">
                <h1 class="normal-case text-xl">Car-Shop</h1>
            </div>
            <div class="flex-none">
                <a class="px-4" href="">
                    Nosotros
                </a>
                <a class="px-4" href="">
                    Nuevos
                </a>
                <a class="px-4" href="">
                    Usados
                </a>
                <a class="px-4" href="">
                    Contacto
                </a>
                <CartWidget />
            </div>
        </div>
    );
};
export default Navbar;
