import ItemCount from "./ItemCount";

const Item = ({ img, title, price }) => {
    const onAdd = (contador) => {
        console.log("Agregaste", contador, "articulos al carrito");
    };

    return (
        <div className="flex flex-col items-center rounded-xl   ">
            <img src={img} alt="" className="mb-4 hover:shadow-xl" />
            <h3 className=" font-poppins font-bold">{title}</h3>
            <p className="font-poppins font-bold">${price}</p>
            <ItemCount stock={5} initial={0} onAdd={onAdd} />
        </div>
    );
};
export default Item;
