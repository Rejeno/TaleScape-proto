import Carousel from "./_components/Carousel";
import Column from "./_components/Coloumn";
import CustomerFeedback from "./_components/CustomerFeedback";
import FAQSection from "./_components/FAQSection";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Index from "./_components/Index";


export default function Home() {
  return (
    <div>
    <div>
      <Hero />
    </div>
    <div>
      <Index />
    </div>
    <div>
      <Column />
    </div>
    <div>
      <Carousel/>
    </div>
    <div>
      <CustomerFeedback/>
    </div>
    <div>
      <FAQSection/>
    </div>
    <div>
      <Footer />
    </div>
    </div>
  )
}