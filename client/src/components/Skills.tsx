//Skills block
import IconCloud from './icon-cloud';
import React from 'react';

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "express",
  "postgresql",
  "docker",
  "git",
  "github",
  "visualstudiocode",
];


const Skills = () => {
  return (
    <div>
        <section id="skills" className="my-5">
      <div className="container">
      <div className='row'>
    <div className='col-md-9'>
        <h2>Навыки</h2>
        <ul className="list-unstyled">
          <li className='textlistskills'><strong>Языки Программирования:</strong> JavaScript, Python, Java, C#, C++, PHP</li>
          <li className='textlistskills'><strong>Web разработка:</strong> HTML, CSS, React, Node.js, Boostrap, Typescript, Flow </li>
          <li className='textlistskills'><strong>Базы данных:</strong> MySQL, MongoDB, Oracle, Postgres</li>
          <li className='textlistskills'><strong>Инструменты:</strong> Git, Docker, VSCode, Visual Studio, IntelliJ IDEA</li>
          <li className='textlistskills'><strong>Soft Skills:</strong> Работа в команде, Коммуникабельность, Решение проблем</li>
          <li className='textlistskills'><strong>Языки:</strong> Отличное знание Английского языка</li>
        </ul>
        </div>
        <div className='col-md-3 skillsiconglobe'>
      <IconCloud iconSlugs={slugs} />
    </div>
      </div>
      </div>
    </section>
    </div>
  );
};

export default Skills;
