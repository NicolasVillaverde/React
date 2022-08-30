import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [contador, setContador] = useState(initial);

    const aumentarContador = () => {
        if (contador < stock) setContador(contador + 1);
    };

    return (
        <>
            <button
                onClick={() => {
                    setContador(contador - 1);
                }}
                disabled={contador === initial}
                class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            >
                -
            </button>
            <span>{contador}</span>
            <button onClick={aumentarContador} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                +
            </button>
            <div>
                <button onClick={() => onAdd(contador)} disabled={contador === 0}>
                    Agregar al carrito
                </button>
            </div>
        </>
    );
};
export default ItemCount;
