import ItemCount from "./ItemCount";

const Item = ({ img, title, description, price }) => {
    const onAdd = (contador) => {
        console.log("Agregaste", contador, "articulos al carrito");
    };

    return (
        <div className="max-w-sm flex flex-col items-center rounded-xl shadow-lg">
            <img src={img} alt="" className="h-20" />
            <h3>{title}</h3>
            <p className="">{description}</p>
            <p className=" bg-slate-600 text-white font-bold py-2 px-4 rounded-full">${price}</p>
            <ItemCount stock={5} initial={0} onAdd={onAdd} />
        </div>
    );
};
export default Item;
