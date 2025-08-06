import React from 'react'
import './Home_portfolio.css'
import Heading from '../../component/Heading/Heading'
import Allproject from '../../component/Projects/Allproject'

export default function Home_portfolioortfolio() {
  return (
    <div className="portfolio pt-5" id="portfolio">
        <Heading headingLabel={"Portfolio"}/>
       <Allproject/>
    </div>
  )
}
