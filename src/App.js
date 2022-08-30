import "./App.css";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
    const onAdd = (contador) => {
        console.log("Agregaste", contador, "articulos al carrito");
    };

    return (
        <div>
            <NavBar />

            <ItemListContainer greeting={`Bienvenido a la tienda`} />
            <ItemCount stock={5} initial={0} onAdd={onAdd} />
        </div>
    );
}

export default App;
