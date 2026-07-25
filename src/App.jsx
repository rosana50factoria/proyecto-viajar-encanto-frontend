import { Outlet } from "react-router-dom";
import Footer from './components/common/Footer';
import Header from './components/common/Header';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fdf3ee]">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
