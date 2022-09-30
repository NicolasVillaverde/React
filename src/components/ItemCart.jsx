import { useCartContext } from "../context/CartContext";

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();
  return (
    <tr className="bg-white border-b">
      <td className="text-md text-gray-900 font-normal whitespace-nowrap">
        <img src={product.img} alt={product.title} className="h-20 mr-4 inline" />
        <span>{product.title}</span>
      </td>
      <td className="text-md text-gray-900 font-light whitespace-nowrap text-center md:text-left">{product.quantity}</td>
      <td className="text-md text-gray-900 font-light whitespace-nowrap text-center md:text-left">${product.price}</td>
      <td className="text-md text-gray-900 font-light whitespace-nowrap text-left">
        <span className="pr-5">${product.quantity * product.price}</span>
        <button
          onClick={() => removeProduct(product.id)}
          className="inline-block px-2 py-2.5 bg-green-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-900 hover:shadow-lg focus:bg-green-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          X
        </button>
      </td>
    </tr>
  );
};
export default ItemCart;
