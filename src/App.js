import ListPage from "./Component/Home";
import Layout from "./Component/Layout";
import { BrowserRouter, Routes, Route} from "react-router-dom"

import "./Styles/ui-designs.css";
import Recipe from "./Component/Recipe";
import Aboutpage from "./Component/Aboutus";
import PurchasePage from "./Component/Purchase";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<ListPage/>}> </Route>
          <Route path="/aboutus" element={<Aboutpage/>}/>
          <Route path="/recipe/:id" element={<Recipe/>}/>
          <Route path="/purchase" element={<PurchasePage/>}/>
        </Route>
          
          </Routes>
          </BrowserRouter>
      
      
      
      
      
     
      
      
    </div>
  );
}

export default App;
