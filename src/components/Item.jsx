import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const Item = ({ img, title, price, id }) => {
  const onAdd = (contador) => {
    console.log("Agregaste", contador, "articulos al carrito");
  };

  return (
    <Link to={`/detail/${id}`} className="flex flex-col items-center rounded-xl pb-3 hover:shadow-xl  ">
      <img src={img} alt="" className="mb-4 " />
      <h3 className=" font-poppins font-bold">{title}</h3>
      <p className="font-poppins font-bold">${price}</p>
      <ItemCount stock={5} initial={0} onAdd={onAdd} />
    </Link>
  );
};
export default Item;
