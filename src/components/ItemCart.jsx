import { useCartContext } from "../context/CartContext";

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();
  return (
    <tr className="bg-white border-b">
      <td className="px-6 py-4 whitespace-nowrap ">
        <img src={product.img} alt={product.title} className="h-20 mr-4" />
      </td>
      <td className="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap">{product.title}</td>
      <td className="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap">{product.quantity}</td>
      <td className="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap">${product.price}</td>
      <td className="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <span className="pr-5">${product.quantity * product.price}</span>
        <button
          onClick={() => removeProduct(product.id)}
          className="inline-block px-2 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          X
        </button>
      </td>
    </tr>
  );
};
export default ItemCart;
