import { useCartContext } from "../context/CartContext";
const CartWidget = () => {
  const { totalProducts, totalPrice } = useCartContext();
  return (
    <>
      <button type="button" className="inline-flex relative items-center p-3  text-center text-black">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:stroke-green-700">
          <path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0" />
        </svg>
        <div className={`inline-flex absolute -top-0 -right-0 justify-center items-center w-6 h-6 text-xs font-bold text-black bg-green-500 rounded-full border-2 border-white dark:border-gray-900 ${totalProducts() > 0 ? " opacity-100" : "opacity-0"}`}>{totalProducts() || ""}</div>
      </button>
      {totalPrice() > 0 ? <span className="text-slate-500 text-sm">(${totalPrice()})</span> : ``}
    </>
  );
};
export default CartWidget;
