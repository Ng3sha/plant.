import About from "./components/about";
import Contactus from "./components/contactus";
import Cta from "./components/cta";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Pricing from "./components/pricing";

export default function app(){
  return (
    <>
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Cta />
      <Pricing />
      <About />
      <Contactus />
      <Footer />
    </div>

    </>
  )
}
