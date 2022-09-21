import { useEffect, useState } from "react";
import CardList from "./CardList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "items");
    if (categoryId) {
      const queryFilter = query(queryCollection, where("category", "==", categoryId));
      getDocs(queryFilter).then((res) => setProductos(res.docs.map((product) => ({ id: product.id, ...product.data() }))));
    } else {
      getDocs(queryCollection).then((res) => setProductos(res.docs.map((product) => ({ id: product.id, ...product.data() }))));
    }
  }, [categoryId]);

  return (
    <div className="py-8">
      <CardList productos={productos} />
    </div>
  );
};
export default ItemListContainer;
