
import './App.css';
import Itemlistcontainer from './components/ItemListContainer/Itemlistcontainer';
import Navbar from './components/NavBar/Navbar';



function App() {

  const articulos = ['Ibanez GIO', 'Cable 3mts', 'Amplificador Crate 25w']
  return (
    <div>
    <Navbar />
    <Itemlistcontainer articulo1={articulos[0]} articulo2={articulos[1]} articulo3={articulos[2]}/>
    </div>
  );
}

export default App;
