
import { Route , Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs"
import { useDentistsState } from "./Components/utils/global.context";


function App() {
  const { state } = useDentistsState()
  return (
    <div className={'App' + " " + state.theme }>
          <Navbar/>
          <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="*" element={<h2>"Error 404"</h2>} />
          </Routes>
          </main>
          <Footer/>
      </div>
  );
}

export default App;
