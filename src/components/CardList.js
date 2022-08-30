import Item from "./Item";

const CardList = ({ productos }) => {
    return (
        <div>
            {productos.map((p) => (
                <Item key={p.id} {...p} />
            ))}
        </div>
    );
};
export default CardList;
