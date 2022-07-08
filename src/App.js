import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopingCart from "./pages/ShopingCart";
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="shopingcart" element={<ShopingCart/>} />
      </Routes>
    </div>
  );
}

export default App;
