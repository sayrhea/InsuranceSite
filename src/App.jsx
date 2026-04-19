import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Approach from "./components/Approach";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Faqs from "./components/Faqs";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Approach />
      <Benefits />
      <Testimonials />
      <Faqs />
    </div>
  );
}

export default App;
