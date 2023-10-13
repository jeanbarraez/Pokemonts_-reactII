import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import NotFound from "./views/NotFound";
import Details from "./views/Details";


export default function App() {
  
return (
 <>
 <Navigation /> 
<Routes>
  <Route path="/" element={<Home />} />
 <Route path="/Pokemones" element={<Pokemones />} />
 <Route path="/Pokemones/:name" element={<Details /> } />
 <Route path="*" element={<NotFound /> }/>

 </Routes>
 </>
)
}