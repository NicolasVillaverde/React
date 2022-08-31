import Item from "./Item";

const CardList = ({ productos }) => {
    return <div className="flex flex-wrap justify-center gap-5">{productos.length ? productos.map((p) => <Item key={p.id} {...p} />) : <h2>Cargando productos...</h2>}</div>;
};
export default CardList;
