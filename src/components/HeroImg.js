import './HeroImg.css'
import React from 'react'
import { Link } from 'react-router-dom';
import Typewriter from "typewriter-effect";
// import MainImg from '../assets/photo.jpg'


const HeroImg = () => {
    return (<>
        <div className="hero">
            <div className="mask">
                {/* <img className='mainimg' src={MainImg} alt="Mainimg" /> */}
            </div>
            <div className="content">
                <p>HI, I'M <span className='myname'>SHIVA RAMA KRISHNA</span></p>
                <h1><Typewriter
                    options={{
                        strings: ['Coder', 'Web Developer','ML Enthusiast'],
                        autoStart: true,
                        loop: true,
                        cursor:";"
                    }}
                />
                </h1>
                <div>
                    <Link target='_blank' to='https://drive.google.com/file/d/1mRUx5YhMtkvvaal2TobnA0LxtzQgRr5R/view?usp=drive_link'  className='btn'>My Resume</Link>
                    <Link to={'/projects'} className='btn btn-light'>Projects</Link>
                </div>
            </div>
        </div>
    </>
    )
}

export default HeroImg