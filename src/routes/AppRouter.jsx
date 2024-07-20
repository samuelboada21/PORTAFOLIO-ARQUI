import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Page from "../container/Page";
import PageNotFound from "../pages/PageNotFound"
import Nosotros from "../pages/Nosotros"

export default function first() {
  return <>
    <Router>
        <Routes>
          <Route path="/" element={<Page componente={<Inicio/>}/>}/>
          <Route path="/nosotros" element={<Page componente={<Nosotros/>}/>}/>
          <Route path="/*" element={<Page componente={<PageNotFound/>}/>}/>
        </Routes>
    </Router>
  </>;
}
