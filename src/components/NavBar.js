import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <nav class="py-5 bg-white drop-shadow-md font-alboreto">
            <div class="flex px-8 justify-around">
                <div class="">HOUSE PLANTS</div>
                <div class="">
                    <ul class="flex gap-5 justify-center">
                        <li>Plantas</li>
                        <li>Macetas</li>
                        <li>Accesorios</li>
                    </ul>
                </div>
                <div class="">
                    <CartWidget />
                </div>
            </div>
        </nav>
        //
    );
};
export default Navbar;
