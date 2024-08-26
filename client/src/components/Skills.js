import React from 'react';

const Skills = () => {
  return (
    <div>
        <section id="skills" className="my-5">
      <div className="container">
      <div className='row'>
    <div className='col-md-9'>
        <h2>Skills</h2>
        <ul className="list-unstyled">
          <li className='textlistskills'><strong>Programming Languages:</strong> JavaScript, Python, Java, C#, C++, Php</li>
          <li className='textlistskills'><strong>Web Development:</strong> HTML, CSS, React, Node.js, Boostrap, Typescript, Flow </li>
          <li className='textlistskills'><strong>Database:</strong> MySQL, MongoDB, Oracle, Postgres</li>
          <li className='textlistskills'><strong>Tools:</strong> Git, Docker, VSCode, Visual Studio, IntelliJ IDEA</li>
          <li className='textlistskills'><strong>Soft Skills:</strong> Problem Solving, Communication, Teamwork</li>
          <li className='textlistskills'><strong>Languages:</strong> Excellent knowledge of Russian and English languages</li>
        </ul>
        </div>
        <div className='col-md-3'>
        <img src="https://via.placeholder.com/350x200" className="img-fluid" alt="About Me"/>
        </div>
      </div>
      </div>
    </section>
    </div>
  );
};

export default Skills;
