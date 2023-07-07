import { Link } from 'react-router-dom'
import './AboutCard.css'
import img from '../assets/code.jpg'
import React from 'react'
import BallCanvas from './Ball'
import TechStacksData from './TechStacksData'

const AboutCard = () => {
    return (
        <>
            <div className="about">
                <div className='firstsec'>
                    <div className="left">
                        <h1>Who am I?</h1>
                        <p>Focused and enthusiastic developer with a keen interest in Web development and artificial intelligence. I am a passionate individual who thrives to build and apply algorithms to solve real-world industry problems.</p>
                        <div className="conbtn">
                            <Link to='https://drive.google.com/file/d/1mRUx5YhMtkvvaal2TobnA0LxtzQgRr5R/view?usp=drive_link' className='btn'>My Resume</Link>
                        </div>
                    </div>
                    <div className="right">
                        <div className="imgcont">
                            <div className="imgstacktop"><img src={img} alt="" /></div>
                            <div className="imgstackbot"><img src={img} alt="" /></div>
                        </div>
                    </div>
                </div>
                <div className="secondsec">
                    <h1>Tech Stacks</h1>
                    <div className="techstacks">
                        {TechStacksData.map((e)=>{
                            return <div className='techs' key={e.name}>
                                <div>
                                <BallCanvas icon={e.imgSrc}/>
                                </div>
                                <p className='techtxt'>{e.name}</p>
                            </div>
                        })}
                    </div>
                </div>
                <div className="thirdsec">
                    <h1>Coding Profiles</h1>
                    <div className="codprofiles">
                        <Link to={'https://leetcode.com/shivarkcodes/'} className='btn'>LeetCode</Link>
                        <Link to={'https://auth.geeksforgeeks.org/user/shivarkq4e3'} className='btn'>Geeksforgeeks</Link>
                        <Link to={'https://www.codechef.com/users/shivarkcodes'} className='btn'>Codechef</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutCard;