import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [contador, setContador] = useState(initial);

    const aumentarContador = () => {
        if (contador < stock) setContador(contador + 1);
    };

    return (
        <>
            <div className="flex gap-4">
                <button
                    onClick={() => {
                        setContador(contador - 1);
                    }}
                    disabled={contador === initial}
                    className="font-poppins font-bold hover:text-green-500 active:text-slate-600 "
                >
                    -
                </button>
                <span className="font-poppins font-bold  active:text-slate-600">{contador}</span>
                <button onClick={aumentarContador} className="font-poppins font-bold  hover:text-green-500  active:text-slate-600">
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
