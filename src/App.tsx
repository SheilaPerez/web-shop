import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Beauty from './Pages/Beauty';
import Menu from './Components/Menu';
import Clothes from './Pages/Clothes';
import Healthy from './Pages/Healthy';
import { FC, useState } from 'react';
import { CartContextProvider } from './Context/CartContext';
interface Props {
}

const App: FC<Props> = () => {
  const [cartState, setCartState] = useState([])


  return (
    <div className="App">
      <CartContextProvider value={{ cartState: cartState, setCartState: setCartState }}>
        <Router>
        <Menu></Menu> 
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/beauty" element={<Beauty></Beauty>}></Route>
            <Route path="/clothes" element={<Clothes></Clothes>}></Route>
            <Route path="/healthy" element={<Healthy></Healthy>}></Route>
          </Routes>
        </Router>
      </CartContextProvider>
     
    </div>
  );
}

export default App;
