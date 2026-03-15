import Hero from './components/Hero';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-slate-200">
      <Hero />
      <Features />
      <Screenshots />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}
