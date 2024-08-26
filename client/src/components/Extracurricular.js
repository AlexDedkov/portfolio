// src/components/Extracurricular.js
import React from 'react';

const Extracurricular = () => {
  return (
    <section id="extracurricular" className="my-5">
      <div className="container">
        <h2 className='activities'>Extracurricular Activities</h2>
        <ul className="list-unstyled">
          <li>
            <h4>Programming Club Member</h4>
            <p>Active participant in coding challenges, hackathons, and group projects.</p>
          </li>
          <li>
            <h4>Volunteer Tutor</h4>
            <p>Provided tutoring in programming and mathematics to fellow students.</p>
          </li>
          <li>
            <h4>Open Source Contributor</h4>
            <p>Contributed to open-source projects on GitHub, focusing on improving documentation and fixing bugs.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Extracurricular;
