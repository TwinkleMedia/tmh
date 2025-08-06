import React from "react";
import Breadcrumbs from "../../component/Breadcrumbs/Breadcrumbs";
import "./Career.css"
function Career() {
  React.useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  return (
    <>
      <div className="about " id="about">
        <Breadcrumbs breadheading={"Career"} breadcrumbsLabel={"About"} />
      </div>

      <div className="container">
        <div className="row">
        <div className="col-12 careertitle">
        <h1>Build Your Dream Career:  <br/>Start Here</h1>
        </div>
          <div className="col-12 col-md-6">
          <div className="career-form">
          <form className="row g-3">
          <div className="col-12">
            <label for="inputName" className="form-label">Name</label>
            <input type="text" className="form-control cercontrolare" id="inputName" placeholder="Enter Name"/>
          </div>
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control cercontrolare" id="inputEmail4" placeholder="Enter email here"/>
          </div>
         
          <div className="col-md-6">
          <label for="inputPhone" className="form-label">Phone</label>
          <input type="email" className="form-control cercontrolare" id="inputPhone" placeholder="Enter Phone here"/>
        </div>
          
         
          <div className="col-12">
            <label for="inputState" className="form-label">Position</label>
            <select id="inputState" className="form-select cercontrolare">
              <option>Graphics Designer</option>
              <option>Video Editior</option>
              <option>Web Developer</option>
              
            </select>
          </div>

          <div className="col-12">
          <label htmlFor="floatingTextarea">Comments</label>
          <textarea className="form-control cercontrolare"  placeholder="Enter Message Here" id="floatingTextarea"></textarea>
        </div>
        
        
       
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Sign in</button>
          </div>
        </form>
          </div>
          </div>
          <div className="col-12 col-md-6">
            <img  src="https://img.freepik.com/free-vector/internship-job-illustration_23-2148722413.jpg?t=st=1713344511~exp=1713348111~hmac=d4b3a4c4dec26066b5a5511ec7b5fe4299280be3d8dc866234776659920c9e1e&w=826" className="img-fluid"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Career;
