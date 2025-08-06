import React from 'react'
import Heading from '../../component/Heading/Heading'
import img from './../../image/blog1front.png'

import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import './Blog.css'
import BlogCard from '../../component/BlogCard/BlogCard';
export default function Blog() {
  return (
    <div className='blog pt-5' id="blog">
        <Heading headingLabel="OUR BLOGS" />
        <div className="container">
            <div className="row">
            <div className='col-12'>
            
            </div>
                <div className="col-lg-6 p-sm-5 border-end">
                    <div className="blogcard mx-5">
                    <img src={img} className='img-fluid bg-warning my-3' style={{borderRadius:"30px"}} alt="" />
                    <div className='d-flex py-4 justify-content-between'><span>By ADMIN</span><span><AccessTimeFilledIcon/> July 22, 2022</span></div>
                    <h4>"Treat Your Marketing Like Your Mobile"</h4>
                    <p>In today’s business landscape, it is both- easier and more difficult to conduct business.</p>
                    </div>
                </div>
                <div className="col-lg-6 p-sm-5">
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                 
                </div>
            </div>
        </div>
    </div>
  )
}
