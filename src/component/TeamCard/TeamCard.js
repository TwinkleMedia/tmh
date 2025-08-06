import React from 'react'
import './TeamCard.css'
export default function TeamCard({ name, designation, imgUrl }) {
  return (
    <div class="our-team">
    <div class="pic">
        <img src={imgUrl} alt="team member" class="img-responsive" />
    </div>
    <div class="content">
        <h3 class="title">{name}</h3>
        <span class="post">{designation}</span>
        <ul class="social">
            <li><a href="#" class="fa fa-facebook"></a></li>
            <li><a href="#" class="fa fa-twitter"></a></li>
            <li><a href="#" class="fa fa-linkedin"></a></li>
        </ul>
    </div>
</div>
  )
}
