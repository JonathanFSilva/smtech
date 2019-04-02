import React from 'react';

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ serviceIcon, serviceTitle, serviceDescription }) => (
  <div className="service">
    <div className="service-icon">
      <i className={`${serviceIcon}`} />
    </div>
    <h4 className="service-title">{serviceTitle}</h4>
    <p className="service-decription">{serviceDescription}</p>
  </div>
);

export default ServiceCard;
