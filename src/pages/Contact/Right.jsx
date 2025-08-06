import React from 'react';

function Right() {
  return (
    <>
      <div className="col-12 col-lg-6 mt-5 right_side_details">
        <form className="row g-3">
        
          <div className="col-6">
            <label for="inputName" className="form-label">Name</label>
            <input type="text" className="form-control" id="inputName" placeholder="Enter Name" required />
          </div>

          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail4" placeholder="Enter Email" required/>
          </div>

          <div className="col-md-12">
            <label for="inputPhone" className="form-label">Phone</label>
            <input type="number" className="form-control" id="inputPhone" maxLength="10" placeholder="Enter Number"  required/>
          </div>

          <div className='col-12'>
            <label for="inputMessage" className="form-label">Message</label>
            <textarea className="form-control" placeholder="Leave a comment here" style={{height:'100px'}} required />
          </div>

          <div className="col-12">
            <button type="submit" className="btn contact_btn">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Right;
