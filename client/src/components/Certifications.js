// src/components/Certifications.js
import React from 'react';

const Certifications = () => {
  return (
    <section id="certifications" className="my-5 ">
      <div className="container">
      <div className='row'>
        <h2>Certifications</h2>
        <ul className="list-inline">
          <li className="list-inline-item">
            <h4>Certified JavaScript Developer</h4>
            <p>Issued by [Platform/Institution], [Year]</p>
          </li>
          <li className='list-inline-item'>
            <h4>React Developer Certification</h4>
            <p>Issued by [Platform/Institution], [Year]</p>
          </li>
          <li className="list-inline-item">
            <h4>Python for Data Science</h4>
            <p>Issued by [Platform/Institution], [Year]</p>
          </li>
        </ul>
      </div>
      </div>
    </section>
  );
};

export default Certifications;
