import React from 'react'
import Heading from '../../component/Heading/Heading'
import './Influencer.css'

export default function Influencer() {
  return (
    <>
    <div id="Influencers" className='pt-5 '>
      <Heading headingLabel="Influencers" />
      </div>

      <div className="influencersContainer">
        <div className="container">
          <div className="row  py-5">
          <div className="col-lg-6">
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, nisi?</h1>
          <section className='influencerSection'>
            <img className="member" src="./asset/influencer/ramshankar.jpg" />
            <img className="member" src="./asset/influencer/zumerhashmi.jpeg" />
            <img className="member" src="./asset/influencer/one.jpg" />
          </section>
            </div>
            <div className="col-lg-6 position-relative" >
            <div class="login-box">
                <h2>Fill This form To Contact Us</h2>
                <form>
                  <div className="row">
                    <div className="col-md-6">
                    <div class="user-box">
                    <input type="text" name="" required />
                    <label>Username</label>
                  </div>
                    </div>
                    <div className="col-md-6">
                    <div class="user-box">
                    <input type="text" name="" required />
                    <label>Phone Number</label>
                  </div>
                    </div>
                    <div className="col-md-6">
                    <div class="user-box">
                    <input type="email" name="" required />
                    <label>Email</label>
                  </div>
                    </div>
                    <div className="col-md-6">
                    <div class="user-box">
                    <input type="text" name="" required />
                    <label>SocialMedia Handle</label>
                  </div>
                    </div>
                  </div>
                 
                 
                  <a className="btn-main" href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}
