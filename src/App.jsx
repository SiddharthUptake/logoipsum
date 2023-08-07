import React, { useEffect } from "react";
import AOS from "aos";
import Header from './Header/Header';
import First from './FirstPage/First';
import Second from './Second/Second';
import Third from './Third/Third';
import Fourth from './Fourth/Fourth';
import Footer from './Footer/Footer';
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({once: true , duration: 1500 });
    AOS.refresh();
  },[]);
  return (
   <>
    <Header/>
    <First/>
    <Second/>
    <Third/>
    <Fourth/>
    <Footer />
   </>
  );
}

export default App;
