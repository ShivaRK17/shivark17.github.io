import React, { useState } from 'react'
import BlogCard from './BlogCard'
import { Link } from 'react-router-dom'
import { PacmanLoader } from 'react-spinners'
import { useApp } from '../context/AppContext'
const BlogComponent = () => {
  const [showmore, Setshowmore] = useState(false)
  const {BlogData,loaded} = useApp();
  return (
    <>
    {/* <div className="blogcomp">
    {BlogData.map((e,ind)=>{
        return <BlogCard key={ind} index={e.index} srcimg={img} title={e.title} desc={e.desc} img={e.img}/>
    })}
    </div> */}
    <div className="container">
        {/* <h1 className='heading'>Projects</h1> */}
        {!loaded?<>
        <div className="prcontainer">
          {(showmore?BlogData:BlogData.slice(0,3)).map((e,ind)=>{
            return <BlogCard key={ind} index={e.index} title={e.title} desc={e.desc} srcimg={e.img}/>
          })}
        </div>
        {BlogData.length>3 && <div className="showbtn">
          <Link onClick={() => { Setshowmore(!showmore) }} className='showmore btn'>Show {showmore?`Less`:`More`}</Link>
        </div>}
        </>:<div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%',marginTop:'5px'}}><PacmanLoader color="yellow"/>
        <h3 style={{textAlign:'center',fontFamily:'Outfit',marginTop:'10px',marginLeft:'15px',color:'white'}}>Loading...</h3></div>}
      </div>
    </>
  )
}

export default BlogComponent