import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Page from "../container/Page";
import PageNotFound from "../pages/PageNotFound";
import Nosotros from "../pages/Nosotros";
import Servicios from "../pages/ServicioPage";
import Portafolio from "../pages/Portafolio";
import Contacto from "../pages/Concacto";

export default function first() {
  return <>
    <Router>
        <Routes>
          <Route path="/" element={<Page componente={<Inicio/>}/>}/>
          <Route path="/nosotros" element={<Page componente={<Nosotros/>}/>}/>
          <Route path="/servicios" element={<Page componente={<Servicios/>}/>}/>
          <Route path="/portafolio" element={<Page componente={<Portafolio/>}/>}/>
          <Route path="/contacto" element={<Page componente={<Contacto/>}/>}/>
          <Route path="/*" element={<Page componente={<PageNotFound/>}/>}/>
        </Routes>
    </Router>
  </>;
}
