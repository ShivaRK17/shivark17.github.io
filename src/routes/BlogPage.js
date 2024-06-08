import React from 'react'
import HeroImg2 from '../components/HeroImg2'
import { useParams } from 'react-router-dom'
import '../components/BlogComponent.css'
import { useApp } from '../context/AppContext'

const BlogPage = () => {
    const {BlogData} = useApp();
    const para = useParams().id
    const currBlog = BlogData.filter((e)=>{
        return e.index===Number.parseInt(para);
    })[0]
  return (
    <>
        <HeroImg2 heading={currBlog.title} text=""/>
        <div className="blogimg">
        <img className='blogpageimg'  src={currBlog.img} alt="Titleimg" />
        </div>
        <div className="blogcontent" dangerouslySetInnerHTML={{__html:currBlog.desc}}></div>
    </>
  )
}

export default BlogPage