
import {BrowserRouter, Routes, Route, Link, useParams} from "react-router-dom"
import About from "./About"
import Home from './Home';
import Contact from "./Contact";
import Products from "./Products";
import Phone from "./Phone";
import Laptop from "./Laptop";



function App() {

    function User(){
        console.log(useParams())
        const {id} = useParams()
        return <h2>User Profile for ID : {id}</h2>
    }

    function NotFound (){
        return <h1>404 - Not Found</h1>
    }

  return (
   <BrowserRouter>
   <h1>React Router Example</h1>

   {/* <a href="/">Home</a> |
   <a href="/About">About</a> |
   <a href="/Contact">Contact</a> */}

   <nav>
    <Link to ="/">Home</Link> |
    <Link to ="/About">About</Link> |
    <Link to="/Contact">Contact</Link> |
    <Link to="/user/10">user</Link> |
    <Link to="/products">Products</Link>
   </nav>
   <Routes>
    <Route path="/" element = {<Home/>}></Route>
    <Route path="/About" element={<About/>}></Route>
    <Route path="/Contact" element={<Contact/>}></Route>
    <Route path="/user/:id" element={<User/>}></Route>
    <Route path="*" element={<NotFound/>}></Route>
    <Route path="/products" element ={<Products/>}>
        <Route path="phone" element={<Phone/>}></Route> 
        <Route path="laptop" element={<Laptop/>}></Route>
    </Route>

   </Routes>
   </BrowserRouter>
  )
}

export default App
