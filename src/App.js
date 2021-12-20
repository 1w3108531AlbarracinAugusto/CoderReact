import Header from "./header/header";
import Main from "./Main.js";

function App() {
    const titulo = "Bienvenido";
    return (
        <>
            <Header />
            <Main titulo={titulo} />
        </>
    );
}
export default App;
