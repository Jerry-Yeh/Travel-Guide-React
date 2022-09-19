import { Fragment, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import './Header.css';
import logoMobile from 'assets/img/icon/Logo-mobile.svg';
import logoDesktop from 'assets/img/icon/Logo-desktop.svg';
import bar from 'assets/img/icon/Bar.svg';
import close from 'assets/img/icon/Close.svg';

const linkList = [
  {
    path: '/scenic-spot',
    text: '探索景點',
  },
  {
    path: '/activity',
    text: '節慶活動',
  },
  {
    path: '/restaurant',
    text: '品嘗美食',
  },
];

const Heaader = () => {
  const [menuStatus, setMenuStatus] = useState(false);
  const nodeRef = useRef(null);

  const toggleMenu = () => {
    setMenuStatus((prevStatus) => !prevStatus);
  };

  return (
    <Fragment>
      <div className="md:border-b fixed w-full bg-white z-10">
        <div className="relative container md:mx-auto px-1 py-2 md:py-8 flex items-center justify-between">
          <div className="w-12.5 h-12.5 md:hidden"></div>
          <Link to="/">
            <img src={logoMobile} className="md:hidden" />
            <img src={logoDesktop} className="hidden md:block" />
          </Link>
          <div
            className="w-12.5 h-12.5 bg-primary-light rounded-xl flex items-center justify-center ease-linear md:hidden"
            onClick={toggleMenu}
          >
            <img src={bar} />
          </div>
          <div className="hidden md:block">
            {linkList.map((item) => (
              <Link key={item.text} to={item.path} className={`text-lg md:mr-5 md:border-0`}>
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* dropdown menu */}
      <div
        className={`fixed right-0 top-0 md:hidden bg-white transform transition ease-in duration-300 flex flex-col px-2 z-30 rounded-bl-3xl ${
          !menuStatus && 'translate-x-full'
        }`}
      >
        <div className="flex py-2 pr-1 pl-7">
          <img src={logoMobile} className="mr-18" />
          <div
            className="w-12.5 h-12.5 bg-primary-light rounded-xl flex items-center justify-center"
            onClick={toggleMenu}
          >
            <img src={close} />
          </div>
        </div>
        {linkList.map((item, index) => (
          <Link
            key={item.text}
            to={item.path}
            onClick={toggleMenu}
            className={`text-lg py-6 ${index === 1 && 'border-y'}`}
          >
            {item.text}
          </Link>
        ))}
      </div>

      {/* backdrop */}
      <CSSTransition in={menuStatus} nodeRef={nodeRef} timeout={1000} classNames="blur" unmountOnExit>
        {() => (
          <div
            ref={nodeRef}
            className={`fixed w-full h-full bg-black bg-opacity-10 backdrop-filter backdrop-blur-sm z-20`}
          ></div>
        )}
      </CSSTransition>
    </Fragment>
  );
};

export default Heaader;
