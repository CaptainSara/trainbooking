import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./style/main.css"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Loader from "./components/Loader"
import { useSelector } from "react-redux"
import AddTrains from "./pages/AddTrains"
import BookNow from "./pages/BookNow"

function App() {
  const {loading} = useSelector(state => state.alerts)
  return (
    <div>
      {loading && <Loader/>}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={ <Login /> } />
          <Route path="/add" element={ <AddTrains /> } />
          <Route path="/book-now/:id" element={ <BookNow /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
