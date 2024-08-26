import React from 'react';

function Portfolio() {
    return(
        <div>
        <section id="projects" className="my-5">
      <div className="container">
        <h2>Portfolio</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card bg-secondary">
              <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="Project 1"/>
              <div className="card-body">
                <h5 className="card-title">Project 1</h5>
                <p className="card-text">Description of the project, highlighting the technologies used and the impact it had.</p>
                <a href="https://github.com/AlexDedkov/portfolio" target="_blank" className="btn btn-dark">View Project</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-secondary">
              <img src="https://via.placeholder.com/350x200"  className="card-img-top" alt="Project 2"/>
              <div className="card-body">
                <h5 className="card-title">Project 2</h5>
                <p className="card-text">Description of the project, highlighting the technologies used and the impact it had.</p>
                <a href="#" target="_blank" className="btn btn-dark">View Project</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-secondary">
              <img src="https://via.placeholder.com/350x200"  className="card-img-top" alt="Project 3"/>
              <div className="card-body">
                <h5 className="card-title">Project 3</h5>
                <p className="card-text">Description of the project, highlighting the technologies used and the impact it had.</p>
                <a href="#" target="_blank" className="btn btn-dark">View Project</a>
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