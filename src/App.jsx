import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about/About"
import Layout from "./Layout";
import Home from "./components/home/Home";
import Men from "./components/ShopCategory/Men";
import Women from "./components/ShopCategory/Women";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import Contact from "./components/contact/Contact";



function App() {
 

  return (
    <>

    
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/men" element={<Men/>}/>
        <Route path="/women" element={<Women/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<div>page not found</div>}></Route>
     
      </Route>
    </Routes>
  </BrowserRouter>
    
    </>
  )
}

export default App
