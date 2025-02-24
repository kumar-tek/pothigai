import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import Services from "./components/Services";
import Contact from "./components/Contact";
import VideoBackground from "./components/VideoBackground";



function App() {
  return (
    <div>
      <Header />
      <div>
      <VideoBackground /> {/* ✅ Only here to prevent duplication */}
      <Hero />
      <Products />
    </div>
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
