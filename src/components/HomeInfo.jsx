import React from 'react'
import { Link }from 'react-router-dom'
import {arrow} from "../assets/icons"

const InfoBox = ({text, link, btnText})=>(
    <div className='info-box'>
        <p className='font-medium text:sm-xl text-center'>{ text }</p>
        <Link className='neo-brutalism-white neo-btn' to={link} >
        {btnText}
        <img src= {arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent = {
    1:(
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'> Hi, I am <span className='font-semibold'>Prekshya</span>{" "}👋
        <br />
        Drag the plane Leftwards to Explore me </h1>       //leading snug for line height and 
    ),
    2:(
        <InfoBox 
            text ="Explore my journey, skills, and achievements below."
            link = '/about'
            btnText = "Let's Explore"
        />
    ),
    3:(
        <InfoBox 
            text ="Led multiple Projects to Success over the years. Curious about the impact?"
            link = '/projects'
            btnText = "Visit my Gallery"
        />
    ),
    4:(
        <InfoBox 
            text ="Need a Project done or looking for a dev? I am just a few Keystrokes away"
            link = '/contact'
            btnText = "Let's Talk"
        />
    )
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage];
}

export default HomeInfo
