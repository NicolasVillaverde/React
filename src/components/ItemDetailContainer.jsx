import ItemDetail from "./ItemDetail";
import products from "../MyProducts.json";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { detailId } = useParams();

  const getItem = (data, time) =>
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
    getItem(products, 2000)
      .then((res) => {
        if (detailId) {
          setItem(res.find((item) => item.id === detailId));
        } else {
          setItem(res);
        }
      })
      .catch((err) => console.log(err, ": No hay productos"));
  }, [detailId]);

  return (
    <div className="py-8">
      <ItemDetail item={item} />
    </div>
  );
};
export default ItemDetailContainer;