import { Outlet } from 'react-router-dom';

import './App.css';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container flex flex-col flex-grow mx-auto px-4 md:px-0 pt-22 md:pt-36">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
