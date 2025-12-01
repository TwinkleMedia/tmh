import React from 'react';
import './serviceSection.css';
import { Link } from 'react-router-dom';

export default function ServicesSection(props) {
  return (
    <Link to={`/${props.url}`} className="serivecsSection-card">
      <div className="card-content d-flex flex-column align-items-center text-center">
        <div className="icon mb-3">{props.icon}</div>
        <h3>{props.heading}</h3>
        <p>{props.desc}</p>
      </div>
    </Link>
  );
}
