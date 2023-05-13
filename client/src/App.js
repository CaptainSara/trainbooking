import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./style/main.css"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Loader from "./components/Loader"
import { useSelector } from "react-redux"
import AddTrains from "./pages/AddTrains"
/* import PublicRoute from "./components/PublicRoute"
import ProtectedRoute from "./components/ProtectedRoute" */

function App() {
  const {loading} = useSelector(state => state.alerts)
  return (
    <div>
      {loading && <Loader/>}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
          <Route path="/register" element={<PublicRoute><Register/></PublicRoute>}/>
          <Route path="/login" element={<PublicRoute><Login/></PublicRoute>}/> */}
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={ <Login /> } />
          <Route path="/add" element={<AddTrains/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
