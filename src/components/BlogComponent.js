import React from 'react'
import BlogCard from './BlogCard'
import img from '../assets/code.jpg'
import BlogData from './BlogData'
const BlogComponent = () => {
  return (
    <>
    <div className="blogcomp">
    {BlogData.map((e,ind)=>{
        return <BlogCard key={ind} index={e.index} srcimg={img} title={e.title} desc={e.desc} img={e.img}/>
    })}
    </div>
    </>
  )
}

export default BlogComponent