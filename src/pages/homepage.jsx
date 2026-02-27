import Navbar from '../components/navbar';
import Hero from '../components/Hero';

export default function HomePage() {
  return (
    <div className="bg-[#121015] min-h-screen">
      <Navbar />
      <Hero />
    </div>
  );
}