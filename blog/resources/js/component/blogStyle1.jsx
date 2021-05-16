import React from 'react'
import { Link } from 'react-router-dom'

function blogStyle1() {
    return (
        <div className='blogstyle1'>
            <img className='blog-img' src="https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg" alt=""/>
            <h3 className='blog-title'>Lorem ipsum dolor</h3> 
            <p className='blog-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto illum, error aliquid </p>

            <Link className='read-article' to='/blog/1'>Read full article...</Link>
        </div>
    )
}

export default blogStyle1
