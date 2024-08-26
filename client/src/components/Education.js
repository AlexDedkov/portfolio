// src/components/Education.js
import React from 'react';

const Education = () => {
  return (
    <section id="education" className="my-5 ">
      <div className="container">
        <h2 className='education'>Образование</h2>
        <ul className="list-unstyled">
          <li>
            <h4>Онлайн Курсы и Сертификаты</h4>
            <p>Онлайн курс с присвоением квалификации Fullstack Web разработчик</p>
            <p>Онлайн курс с присвоением квалификации Инженер разработчик</p>
          </li>
          <li>
            <h4>Дополнительное образование</h4>
            <p>Бакалавр экономики ГУАП</p>
            <p>Магистр экономики ГУАП</p>
            <p></p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
