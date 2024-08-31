//Portfolio block


import React from 'react';

function Portfolio() {
    return(
        <div>
        <section id="projects" className="my-5">
      <div className="container">
        <h2 className='projectstitle'>Мои Проекты</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card bg-secondary">
              <img src={require('../imgs/Githublogo.png')} className="card-img-top cardimg " loading="lazy" alt="Project 1"/>
              <div className="card-body">
                <h5 className="card-title">Мой github.</h5>
                <p className="card-text">Мой гитхаб содержит все выполненные мной проекты в процессе обучения</p>
                <a href="https://github.com/AlexDedkov/" target="_blank" rel="noreferrer" className="btn btn-dark">Посмотреть</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-secondary">
              <img src={require('../imgs/Tilda_logo_hotizontal_white.png')} loading="lazy" className="card-img-top cardimg cardtildaimg" alt="Project 2"/>
              <div className="card-body">
                <h5 className="card-title">Tilda проект</h5>
                <p className="card-text">Проект на платформе Tilda который был выполнен до начала обучения</p>
                <a href="https://ingen-mk.ru/" target="_blank" rel="noreferrer" className="btn btn-dark">Посмотреть</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-secondary">
              <img src="https://placehold.co/350x200/000000/FFFFFF/png" loading="lazy"  className="card-img-top cardimg cardplaceholderimg" alt="Project 3"/>
              <div className="card-body">
                <h5 className="card-title">Проект 3</h5>
                <p className="card-text">Здесь будет размещен еще один проект в ближайшее время</p>
                <button className="btn btn-dark disabled">Посмотреть</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
}

export default Portfolio