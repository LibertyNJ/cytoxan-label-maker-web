import React from 'react';

import SVGIcon from '../SVGIcon';

const ContactSection = () => (
  <section className="col-3">
    <h2 className="text-primary">Contact</h2>
    <p className="lead">Nathaniel J. Liberty</p>
    <ul className="list-unstyled">
      <li>
        <SVGIcon type="phone" width="1em" height="1em" className="align-middle" fill="#003ca5" />{' '}
        Telephone: <a href="tel:15165621588">(516)562-1588</a>
      </li>
      <li>
        <SVGIcon type="mail" width="1em" height="1em" className="align-middle" fill="#003ca5" />{' '}
        Email:{' '}
        <a href="mailto:nliberty@northwell.edu?subject=Cytoxan%20Label%20Maker">
          nliberty@northwell.edu
        </a>
      </li>
    </ul>
  </section>
);

export default ContactSection;
