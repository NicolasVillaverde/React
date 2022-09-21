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

  const renderItemCount = () => {
    if (item.stock > 0) {
      return (
        <>
          {goToCart ? (
            <Link to="/cart" className="font-poppins border-2 p-1  hover:border-green-600">
              Ir al carrito
            </Link>
          ) : (
            <ItemCount stock={item.stock} initial={0} onAdd={onAdd} />
          )}
        </>
      );
    } else {
      return (
        <>
          <p className=" font-poppins font-bold text-1xl">No hay stock del producto deseado :(</p>
        </>
      );
    }
  };

  return (
    <div className="flex-col md:flex md:flex-row justify-center gap-2 md:gap-4 px-2">
      <div className="w:100 md:w-1/4 md:h-64">
        <img src={item.img} alt="" className="" />
      </div>
      <div className=" md:w-1/3 flex flex-col gap-2 md:gap-9 ">
        <h1 className=" font-poppins font-bold text-lg md:text-3xl">{item.title}</h1>
        <p className=" font-poppins text-sm ">{item.description}</p>
        <p className="font-poppins font-bold  border-2 p-1 text-lg md:text-2xl">${item.price}</p>
        <p className=" font-poppins text-sm ">Stock disponible : {item.stock} unidades</p>
        <>{renderItemCount()}</>
      </div>
    </div>
  );
};
export default ItemDetail;
