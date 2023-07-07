import React, { useState } from 'react'
import './ProjectContainer.css'
import ProjectCard from './ProjectCard'
import { Link } from 'react-router-dom'
import ProjectData from './ProjectData'


const ProjectContainer = () => {
  const [showmore, Setshowmore] = useState(false)
  return (
    <>
      <div className="container">
        {/* <h1 className='heading'>Projects</h1> */}
        <div className="prcontainer">
          {(showmore?ProjectData:ProjectData.slice(0,3)).map((e,ind)=>{
            return <ProjectCard key={ind} title={e.title} desc={e.desc} srcimg={e.imgscr} isWeb={e.isWeb} weburl={e.weburl} github={e.githuburl}/>
          })}
        </div>
        <div className="showbtn">
          <Link onClick={() => { Setshowmore(!showmore) }} className='showmore btn'>Show {showmore?`Less`:`More`}</Link>
        </div>
      </div>
    </>
  )
}

export default ProjectContainer