import React from 'react'
import './ProjectCard.css'
import { Link } from 'react-router-dom'
import {BiGlobe} from 'react-icons/bi'
import { FaGithub } from 'react-icons/fa'


const ProjectCard = (props) => {
    return (
        <>

            <div className="card">
                <img src={props.srcimg} alt="" />
                <h2 className='protitle'>{props.title}</h2>
                <div className="prodetails">
                    <p>{props.desc}</p>
                </div>
                <div className="probtn">
                    {props.isWeb?<Link target='_blank' to={props.weburl} className='btn' ><BiGlobe size={20}/> </Link>:""}
                    <Link target='_blank' to={props.github} className='btn' ><FaGithub size={20}/></Link>
                </div>
            </div>
        </>
    )
}

export default ProjectCard