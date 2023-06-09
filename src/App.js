
import './App.css';
import Banner from './components/banner/Banner';
import Features from './components/features/Features';
import Navbar from "./components/navbar/Navbar";
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import FooterBottom from './components/bottomFooter/BottomFooter';
function App() {
  return (
  <div className="w-full h-auto bg-bodyColor text-lightText ">
  <div className="max-w-screen-2xl mx-auto px-16">
    <Navbar />
    <Banner />
    <Features />
    <Projects />
    <Resume />
    <Contact />
    <FooterBottom />
  
  </div>
</div>
  );
}

export default App;
