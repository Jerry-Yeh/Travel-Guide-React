import { Outlet } from 'react-router-dom';

import './App.css';
import Header from 'components/Header/Header';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container flex flex-col flex-grow mx-auto px-4 md:px-0 pt-22 md:pt-36">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
