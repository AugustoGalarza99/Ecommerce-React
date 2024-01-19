import Button from "./components/Button/Button"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemCount from "./components/ItemCount/ItemCount";
//import ItemCounts from "./components/ItemCount"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/category/;categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={ <ItemDetailContainer />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        <ItemListContainer greeting={"Bienvenidos a mi ecommerce"}/>
        <ItemDetailContainer />
      
        <Button label={"Home"}/>
        <Button label={"About us"}/>
        <Button label={"Contact"}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

//no pude poner el ItemListCountainer porque cuando lo importo dentro del return se me deja de ver todo en el localhos
//ItemListContainer greeting={"Bienvenidos a mi ecommerce"}   Eso queria poner y se me desaaprece todo
//La foto tampoco se porque no se me ve


export default App