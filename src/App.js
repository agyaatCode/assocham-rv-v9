import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import KnowledgeCenter from "./components/KnowledgeCenter";
import MediaSection from "./components/MediaSection";
import EventsSection from "./components/EventsSection";
import SocialMedia from "./components/SocialMedia";
import Footer from "./components/Footer";
import Highlighting from './components/Highlighting';
import PillarsBar from './components/PillarsBar';


const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <PillarsBar />
        <Highlighting />
        <EventsSection />
        <KnowledgeCenter />
        <MediaSection />
        <SocialMedia />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
