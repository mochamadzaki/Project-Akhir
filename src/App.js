import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Profile from "./pages/Profile"
// import ProgramStudi from "./pages/ProgramStudi"
import Pramuka from "./pages/Pramuka"
import Aslab from "./pages/Aslab";
import Sispala from "./pages/Sispala"
import Sejarah from "./pages/Sejarah"
import Futsal from "./pages/Futsal"
import Artikel from "./pages/Artikel"
import Visimisi from "./pages/Visimisi"
import ProgramSekolah from "./pages/ProgramSekolah"
import Pagenotfound from "./pages/Pagenotfound"
import Card from"./Card";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sejarah" element={<Sejarah/>}/>
          <Route path="/Aslab" element={<Aslab/>}/>
          <Route path="/Pramuka" element={<Pramuka/>}/>
          <Route path="/Sispala" element={<Sispala/>}/>
          <Route path="/Visimisi" element={<Visimisi/>}/>
          <Route path="/ProgramSekolah"element={<ProgramSekolah/>}/>   
          <Route path="/Futsal" element={<Futsal />}/>
          <Route path="/Artikel" element={<Artikel />} />
          <Route path="*" element={<Pagenotfound />} />
          <Route Card/>
        </Routes>
      </BrowserRouter>
    </div>
  );
  
}
  

export default App;
