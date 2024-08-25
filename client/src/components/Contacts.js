import React from 'react';

const Contacts = () => {
  return (
    <div>
        <section id="contact" className="my-5 ">
      <div className="container">
        <h2>Contact Me</h2>
        <p>
          My contacts are listed below, feel free to reach out.
        </p>
        <ul className="list-unstyled">
          <li><strong>Email:</strong> <a href="mailto:sasha.dedkov@list.ru">sasha.dedkov@list.ru</a></li>
          <li><strong>Phone:</strong> +7 (921) 865-57-56</li>
          <li><strong>GitHub:</strong> <a href="https://github.com/AlexDedkov" target="_blank" rel="noopener noreferrer">github.com/AlexDedkov</a></li>
        </ul>
      </div>
    </section>
    </div>
  );
};

export default Contacts;
