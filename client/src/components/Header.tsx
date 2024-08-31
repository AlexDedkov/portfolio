//Header block

import React from 'react';

const Header = () => {
  return (
    <div>
      <header className="fixed-top bg-dark text-white p-3">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand navttext" href="#top">Александр Дедков</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link navttext" href="#top">Главная</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link navttext" href="#about">Обо мне</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link navttext" href="#projects">Проекты</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link navttext" href="#certifications">Сертификаты</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link navttext" href="#education">Образование</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link navttext" href="#contact">Связаться со мной</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
