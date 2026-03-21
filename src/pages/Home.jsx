import { useState } from "react";
import Footer from "../component/Footer";
import OtherServices from "../component/OtherServices";
import PricingComparison from "../component/PricingComparison";
import ImageSlider from "../component/ImageSlider";
import StoreSection from "../component/StoreSection";
import BookForm from "../component/BookForm";
import MyndContext from "../context/mynd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Home() {

  const user = "MYND Drycleaner & Laundry";
  const [open, setOpen] = useState(false);

  return (
    <>
      <ImageSlider />

      <MyndContext.Provider value={user}>
        <OtherServices openModal={() => setOpen(true)} />

        <BookForm
          isOpen={open}
          onClose={() => setOpen(false)}
        />

        <PricingComparison />
      </MyndContext.Provider>

      <StoreSection />

      <Footer />
    </>
  );
}

export default Home;