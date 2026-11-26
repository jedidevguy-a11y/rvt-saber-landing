import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import DeleteData from './pages/DeleteData';

// Scroll to top whenever the route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Screenshots />
      <Pricing />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-slate-200">
      <ScrollToTop />
      <Routes>
        <Route path="/"        element={<Home />} />
        <Route path="/privacy"     element={<Privacy />} />
        <Route path="/terms"       element={<Terms />} />
        <Route path="/delete-data" element={<DeleteData />} />
      </Routes>
    </div>
  );
}
