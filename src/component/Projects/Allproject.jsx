import React, { useState } from "react";
import Projectimg from "./projectimg";
import './Project.css'
const Allproject = () => {
  const [items, setItem] = useState(Projectimg);
  const filterItem = (categItem) => {
    const updatedItems = Projectimg.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItem(updatedItems);
  };

  return (
    <>
      <div className="pro-button">
        <div className="project-button">
          <button className="btn btn-outline-warning fw-bold" onClick={() => setItem(Projectimg)}>
            VIEW ALL
          </button>
          <button
            className="btn btn-outline-warning fw-bold"
            onClick={() => filterItem("website")}
          >
            Web Development 
          </button>
          <button className="btn btn-outline-warning fw-bold" onClick={() => filterItem("creative")}>Creative & Branding</button>
          <button className="btn btn-outline-warning fw-bold" onClick={() => filterItem("website")}>Digital Video </button>
          <button className="btn btn-outline-warning fw-bold" onClick={() => filterItem("website")}>DI Work</button>
          <button className="btn btn-outline-warning fw-bold" onClick={() => filterItem("website")}>Motion Graphics</button>
        </div>
      </div>

      <div className="project-iteam container-fluid mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {items.map((elem) => {
                const { id, Image, category } = elem;

                return (
                  <div className=" py-3 iteam-1 col-md-6 col-xl-4">
                   
                      <img src={Image} alt="Gallary" className="img-fluid"></img>
                   
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Allproject;
