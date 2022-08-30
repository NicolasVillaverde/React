const Item = ({ title, description, price }) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{price}</p>
        </div>
    );
};
export default Item;
