import React, { useEffect } from "react";
import Navbar from './Components/Navbar/Navbar';
import { VStack } from "@chakra-ui/react";
import Header from "./Components/Header/Header";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";




function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {

  return (
    <div>
      <Header/>
      <Navbar />

      <VStack>
        <Router>
          <ScrollToTop />

          <div className="App" >
            
            <Routes>
              {/* Routes */}


    
            </Routes>
          </div>
          
        </Router>
      </VStack>

    </div>
  );
}

export default App;