import React, { useEffect, useState } from 'react'
import './ProjectContainer.css'
import ProjectCard from './ProjectCard'
import { Link } from 'react-router-dom'
import { PacmanLoader } from 'react-spinners'


const ProjectContainer = () => {
  const [loaded, setLoaded] = useState(true);
  const [showmore, Setshowmore] = useState(false)
  const [ProjectData, setProjectData] = useState([])
  useEffect(() => {
    const getProjects = async ()=>{
      try {
        const resp = await fetch(process.env.REACT_APP_PROJECTS_API);
        const data = await resp.json();
        setProjectData(data);
        setLoaded(false);
      } catch (error) {
        setProjectData([])
      }
    }
    getProjects();
  }, [])
  
  return (
    <>
      <div className="container">
        {/* <h1 className='heading'>Projects</h1> */}
        {!loaded?<>
        <div className="prcontainer">
          {(showmore?ProjectData:ProjectData.slice(0,3)).map((e,ind)=>{
            return <ProjectCard key={ind} title={e.title} desc={e.desc} srcimg={e.imgsrc} isWeb={e.isWeb} weburl={e.weburl} github={e.githuburl}/>
          })}
        </div>
        <div className="showbtn">
          <Link onClick={() => { Setshowmore(!showmore) }} className='showmore btn'>Show {showmore?`Less`:`More`}</Link>
        </div>
        </>:<div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%',marginTop:'5px'}}><PacmanLoader color="yellow"/>
        <h3 style={{textAlign:'center',fontFamily:'Outfit',marginTop:'10px',marginLeft:'15px',color:'white'}}>Loading...</h3></div>}
      </div>
    </>
  )
}

export default ProjectContainer