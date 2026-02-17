
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from './Header/index'
import Home from  './Home/index.js'
import Erro from "./Erro/index.js";
import Filme from "./Filme/index.js";
import Favoritos from './Favoritos/index'
// import { ToastContainer } from "react-toastify";
function RoutesApp()
{
  return( 
    
  
    <BrowserRouter> 
      <Header/>
                {/* <ToastContainer autoClose={3000}/> */}
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/filme/:id" element={<Filme/>}/>
         <Route path="/favoritos" element = {<Favoritos/>}/>

         
         <Route path="*" element ={<Erro/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default RoutesApp;

