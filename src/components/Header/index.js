import React, { useState, useEffect } from 'react';
import className from 'classnames';

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isOnTop, setisOnTop] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30 /* 0.2 * window.screen.height */) {
        setisOnTop(false);
      } else {
        setisOnTop(true);
      }
    });

    return () => window.removeEventListener('scroll');
  }, []);

  return (
    <header className={className({ transparent: isOnTop })}>
      <nav>
        <div className="nav-brand">
          <a href=" ">
            <img src={require('../../assets/img/logob.png')} alt="SMTech logo" />
          </a>
        </div>
        <ul className={`nav-menu ${className({ open: menuIsOpen })}`}>
          <li className="nav-item active">
            <a href=" " className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href=" " className="nav-link">
              Portifolio
            </a>
          </li>
          <li className="nav-item">
            <a href=" " className="nav-link">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a href=" " className="nav-link">
              Preços
            </a>
          </li>
          <li className="nav-item">
            <a href=" " className="nav-link">
              Contato
            </a>
          </li>
        </ul>
        <button
          className={`nav-toggler ${className({ open: menuIsOpen })}`}
          type="button"
          onClick={() => {
            setMenuIsOpen(!menuIsOpen);
          }}
        >
          <div />
          <div />
          <div />
        </button>
      </nav>
    </header>
  );
};

export default Header;
