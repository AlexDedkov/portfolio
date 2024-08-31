//Certifications block

import React from 'react';

const Certifications = () => {
  return (
    <section id="certifications" className="my-5">
      <div className="container">
        <h2 className="d-flex justify-content-center certificates">Сертификаты</h2>
        <div className="row">
          <div className="col-12 col-md-4 d-flex flex-column align-items-center my-3">
            <h4>Fullstack developer</h4>
            <p>Выдан университетом ИТМО в 2024 г.</p>
            <img
              src="https://placehold.co/250x400/000000/FFFFFF/png"
              loading="lazy"
              alt="Certificate 1"
              className="certificate-img"
            />
          </div>
          <div className="col-12 col-md-4 d-flex flex-column align-items-center my-3">
            <h4>Инженер разработчик</h4>
            <p>Выдан университетом ИТМО в 2024 г.</p>
            <img
              src="https://placehold.co/250x400/000000/FFFFFF/png"
              loading="lazy"
              alt="Certificate 2"
              className="certificate-img"
            />
          </div>
          <div className="col-12 col-md-4 d-flex flex-column align-items-center my-3">
            <h4>Сертификат IELTS</h4>
            <p>Академический результат 8.0 выдан в 2023 г.</p>
            <img
              src="https://placehold.co/250x400/000000/FFFFFF/png"
              loading="lazy"
              alt="Certificate 3"
              className="certificate-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
