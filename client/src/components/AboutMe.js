import React from 'react';


const AboutMe = () => {
  return (
    <div>
      <section id="about" className="my-5 ">
        <div className="container my-1">
          <h2>About Me</h2>
          <div className="row">
            <div className="col-md-6">
              <p className='maintext'>
                Hello! I'm [Your Name], a passionate [Your Profession] with a love for creating impactful and innovative solutions. 
                I have a background in [Your Background/Field] and experience in [Key Skills or Technologies].
              </p>
              <p className='maintext'>
                My journey started in [Brief Background or How You Started], and over the years, I have honed my skills in [Specific Skills/Technologies]. 
                I'm always eager to learn and adapt to new challenges, aiming to contribute positively to any project I undertake.
              </p>
              <p className='maintext'>
                When I'm not coding, I enjoy [Hobbies or Interests]. Feel free to connect with me and explore how we can work together!
              </p>
            </div>
            <div className="col-md-6">
              <img src="https://via.placeholder.com/350x200" loading="lazy" className="img-fluid aboutmepic" alt="About Me"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
