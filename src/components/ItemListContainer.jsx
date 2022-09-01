import { useEffect, useState } from "react";
import CardList from "./CardList";
import products from "../MyProducts.json";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const getProducts = (data, time) =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data) {
                    resolve(data);
                } else {
                    reject("Error");
                }
            }, time);
        });

    useEffect(() => {
        getProducts(products, 2000)
            .then((res) => {
                setProductos(res);
            })
            .catch((err) => console.log(err, ": No hay productos"));
    }, []);

    return (
        <div className="py-8">
            <CardList productos={productos} />
        </div>
    );
};
export default ItemListContainer;