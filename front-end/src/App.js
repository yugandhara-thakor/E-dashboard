import Nav from './component/Nav';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './component/Footer';
import SighUp from './component/SighUp';
import PrivateComponent from './component/PrivateConponent';
import Login from './component/Login';
import AddProduct from './component/AddProduct';
import ProductList from './component/ProductList';
import UpdateProduct from './component/UpdateProduct';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      < Nav />
      <Routes>
        
        <Route element={<PrivateComponent/>}>
      <Route path='/' element={<ProductList />} />
      <Route path='/add' element={< AddProduct />} />
      <Route path='/update/:id' element={< UpdateProduct />} />
      <Route path='/logout' element={<h1>logout Component</h1>} />
      <Route path='/profile' element={<h1>profile Component</h1>} />
      </Route>

      <Route path='/sighup' element={<SighUp />}/>
      <Route path='login' element={<Login />}></Route>

      </Routes>
      
      </BrowserRouter>
      < Footer />
      
       </div>
  );
}

export default App;
