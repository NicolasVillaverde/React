import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [contador, setContador] = useState(initial);

    const aumentarContador = () => {
        if (contador < stock) setContador(contador + 1);
    };

    return (
        <div>
            <button
                onClick={() => {
                    setContador(contador - 1);
                }}
                disabled={contador === initial}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            >
                -
            </button>
            <span>{contador}</span>
            <button onClick={aumentarContador} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                +
            </button>
            <div>
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full" onClick={() => onAdd(contador)} disabled={contador === 0}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};
export default ItemCount;
