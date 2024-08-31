//Contacts block

import React from 'react';

const Contacts = () => {
  return (
    <div>
      <section id="contact" className="my-5 contactssec">
      <div className="container">
        <h2 className='contacts'>Связаться со мной</h2>
        <ul className="list-unstyled">
          <li className='contactslinks'><strong>Email:</strong> <a href="mailto:sasha.dedkov@list.ru">sasha.dedkov@list.ru</a></li>
          <li className='contactslinks'><strong>Phone:</strong> +7 (921) 865-57-56</li>
          <li className='contactslinks'><strong>GitHub:</strong> <a href="https://github.com/AlexDedkov" target="_blank" rel="noopener noreferrer">github.com/AlexDedkov</a></li>
        </ul>

      </div>
    </section>
    </div>
  );
};

export default Contacts;
