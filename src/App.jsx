import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import OtherServices from "./component/OtherServices";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PricingComparison from "./component/PricingComparison";
import ImageSlider from "./component/ImageSlider";
import "./App.css";
import MyndContext from "./context/mynd";   
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function App() {
   const user = "MYND Drycleaner & Laundry";
  return (
    <>
      <Navbar />
      <ImageSlider />
       <MyndContext.Provider value={user}>
        </MyndContext.Provider>
         <OtherServices />
        <PricingComparison />

      <Footer />
    </>
  );
}

export default App;
