import React from "react";
import "./Breadcrumbs.css";
import { Link } from "react-router-dom";

export default function Breadcrumbs({ breadcrumbsLabel, breadheading }) {
  return (
    <>
     

      <div className="Breadcrumb_section">
        <div className="container ">
          <div className="row">
            <div className="col-12">
              <div className="bread-title">
              <h2>{breadheading}</h2>
              <p><Link to="/" className="bread_links">Home</Link> <span style={{color: 'var(--Primary-colour)'}}>&gt;&gt;</span> <Link className="bread_links">{breadheading}</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
