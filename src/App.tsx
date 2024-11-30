import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import {Login} from './pages/auth/login'
import { useEffect, useState } from 'react';
import Loading from './layout/loading/loading'; // Import correctly
import AppRoutes from './routers/AppRoutes'

function AppContent() {
  const [loading, setLoading] = useState(false); // Renamed state
  const location = useLocation();
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulated loading delay

    return () => clearTimeout(timer); // Cleanup timer
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {loading && <Loading />}
      <Navbar />
      <main className="flex-grow pt-16">
      <AppRoutes /> 
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
