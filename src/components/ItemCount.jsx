import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const aumentarContador = () => {
    if (contador < stock) setContador((prev) => prev + 1);
  };

  return (
    <>
      <div className="flex gap-4 items-center">
        <button
          onClick={() => {
            setContador((prev) => prev - 1);
          }}
          disabled={contador === initial}
          className={`font-poppins font-bold p-2   ${contador === 0 ? "text-slate-300" : " hover:text-green-500"}`}
        >
          -
        </button>
        <span className="font-poppins font-bold ">{contador}</span>
        <button onClick={aumentarContador} disabled={contador >= stock} className={`font-poppins font-bold p-2  ${contador < stock ? " hover:text-green-500" : "text-slate-300"}`}>
          +
        </button>
      </div>
      <div>
        <button className="font-poppins border-2 p-1  hover:border-green-600" onClick={() => onAdd(contador)} disabled={contador === 0}>
          Agregar al carrito
        </button>
      </div>
    </>
  );
};
export default ItemCount;
