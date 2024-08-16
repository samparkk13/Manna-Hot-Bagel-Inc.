import React from "react";
import Navbar from './Components/Navbar/Navbar';
import { VStack } from "@chakra-ui/react";
import Header from "./Components/Header/Header";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import About from "./Components/About/About";
import Menu from "./Components/Menu/Menu";
import Contact from "./Components/Contact/Contact";
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Header id="header" />
      <Navbar />
      <ImageGallery />
      <div id="about"><About /></div>
      <div id="menu"><Menu /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
}

export default App;
