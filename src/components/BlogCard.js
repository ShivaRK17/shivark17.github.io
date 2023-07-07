import React from 'react'
import './BlogCard.css'
import { Link } from 'react-router-dom'


const BlogCard = (props) => {
    return (
        <>

            <div className="card">
                <img src={props.srcimg} alt="" />
                <h2 className='blogtitle'>{props.title}</h2>
                <div className="blogdetails">
                    <p>{props.desc.slice(0,100)}...</p>
                </div>
                <div className="blogbtn">
                    <Link to={`/blog/${props.index}`} className='btn'>Read More</Link>
                </div>
            </div>
        </>
    )
}

export default BlogCard