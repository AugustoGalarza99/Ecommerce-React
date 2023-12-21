import Button from "./components/Button/Button"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <>
      <NavBar />
      
      <Button label={"Home"}/>
      <Button label={"About us"}/>
      <Button label={"Contact"}/>
    </>
  )
}

//no pude poner el ItemListCountainer porque cuando lo importo dentro del return se me deja de ver todo en el localhos
//ItemListContainer greeting={"Bienvenidos a mi ecommerce"}   Eso queria poner y se me desaaprece todo
//La foto tampoco se porque no se me ve


export default App