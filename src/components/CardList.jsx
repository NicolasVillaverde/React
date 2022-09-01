import Item from "./Item";
import Spinner from "./Spinner";

const CardList = ({ productos }) => {
    return <div className="grid grid-cols-4 gap-10 mx-64">{productos.length ? productos.map((product) => <Item key={product.id} {...product} />) : <Spinner />}</div>;
};
export default CardList;
