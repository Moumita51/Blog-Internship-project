import React from 'react'
import { Link } from 'react-router-dom'

function blogStyle2({name}) {
    return (
        <div className='blogstyle2'>
            <img className='blog-img' src="https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg" alt=""/>
            <h3 className='blog-title'>{name}</h3> 
            <Link className='blog-link' to='/blog/12'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In cum enim </p></Link>
        </div>
    )
}

export default blogStyle2
