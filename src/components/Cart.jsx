import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import ItemCart from "./ItemCart";
import Form from "./Form";

const Cart = () => {
  const { cart, totalPrice, clearCart } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className="flex align-center justify-center py-5">
        <div className="flex flex-col gap-8">
          <p className="text-xl font-poppins md:text-3xl">No hay articulos en el carrito :(</p>
          <Link to="/">
            <button className="inline-block px-6 py-2.5 font-poppins bg-green-500 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">
              Ver todos los articulos
            </button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="md:mx-64 ">
      <table className="min-w-full md:my-10 font-poppins">
        <thead className="border-b">
          <tr>
            <th className="text-sm font-medium text-gray-900 text-left">Producto</th>
            <th className="text-sm font-medium text-gray-900 text-left">Catindad</th>
            <th className="text-sm font-medium text-gray-900 text-left ">Precio</th>
            <th className="text-sm font-medium text-gray-900 text-left ">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <ItemCart key={product.id} product={product} />
          ))}
        </tbody>
        <tfoot>
          <tr className="">
            <td></td>
            <td></td>
            <td className="border-b-4 border-green-500 text-md font-medium  text-gray-900 md:py-4 text-left">Total:</td>
            <td className="border-b-4 border-green-500 text-md font-medium  text-gray-900 md:py-4 text-left">${totalPrice()}</td>
          </tr>
        </tfoot>
      </table>
      <button
        onClick={() => clearCart()}
        className="font-poppins px-2 py-2.5 bg-green-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-900 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        Eliminar carrito
      </button>
      <Form />
    </div>
  );
};
export default Cart;
