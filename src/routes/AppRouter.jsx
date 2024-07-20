import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function first() {
  return <>
    <Router>
        <Navbar/>
        <Footer/>
        <Routes>
        </Routes>
    </Router>
  </>;
}
