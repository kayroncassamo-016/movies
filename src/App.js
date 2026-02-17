
import RoutesApp from "./routes";
import './App.css'
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <div className="App">
      <RoutesApp/>
      <ToastContainer autoClose={3000}/>
    </div>
  );
}

export default App;
