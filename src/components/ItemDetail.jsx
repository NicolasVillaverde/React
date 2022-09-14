import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useCartContext } from "../context/CartContext";

const ItemDetail = ({ item }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(item, quantity);
  };
  return (
    <div className="flex justify-center gap-4">
      <div className=" w-1/4 h-64">
        <img src={item.img} alt="" className="" />
      </div>
      <div className="w-1/3 flex flex-col gap-9 ">
        <h1 className=" font-poppins font-bold text-3xl">{item.title}</h1>
        <p className=" font-poppins ">{item.description}</p>
        <p className="font-poppins font-bold  border-2 p-1 text-2xl">${item.price}</p>
        <p className=" font-poppins ">Stock disponible : {item.stock} unidades</p>
        {goToCart ? (
          <Link to="/cart" className="font-poppins border-2 p-1  hover:border-green-600">
            Ir al carrito
          </Link>
        ) : (
          <ItemCount stock={item.stock} initial={0} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};
export default ItemDetail;
