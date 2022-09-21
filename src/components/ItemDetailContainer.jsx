import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { detailId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "items", detailId);
    getDoc(queryDoc).then((res) => setItem({ id: res.id, ...res.data() }));
  }, [detailId]);

  return (
    <div className="py-8">
      <ItemDetail item={item} />
    </div>
  );
};
export default ItemDetailContainer;
