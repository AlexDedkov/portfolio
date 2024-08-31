//Block about me

//НЕ УДАЛЯТЬ НЕ РАБОТАЕТ DROPDOWN БЕЗ НЕГО
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React from 'react';

const AboutMe = () => {
  return (
    <div className='aboutmesec'>
      <section id="about" className="my-5  b">
        <div className="container my-1">
          <h2>Обо мне</h2>
          <div className="row">
            <div className="col-md-6">
              <p className='maintext'>
                Здравствуйте! Я junior fullstack web разработчик. Я окончил сертифицированные курсы университета ИТМО по web разработке фронт и бекэнда. Также я нахожусь в процессе обучения
                на Инженера разработчика.
              </p>
              <p className='maintext'>
              До начала моей карьеры в программировании я окончил ГУАП по экономическому направлению связанному с инновациями и стал сильно заинтересован в сфере разработки.
              </p>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              <div className="aboutmepic-wrapper">
                <img src="https://via.placeholder.com/350x250" loading="lazy" className="aboutmepic" alt="About Me"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
