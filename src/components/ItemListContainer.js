import { useEffect, useState } from "react";
import CardList from "./CardList";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const URL = "https://fakestoreapi.com/products";
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProductos(data);
            });
    }, []);

    return (
        <>
            <div>Item List Container</div>
            <CardList productos={productos} />
        </>
    );
};
export default ItemListContainer;
