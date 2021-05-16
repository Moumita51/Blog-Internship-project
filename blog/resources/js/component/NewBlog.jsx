import React from 'react'
import { Link } from 'react-router-dom'

const lorem = <p>Lorem ipsum dolor, sit amet consectetur </p>
const date =<p>Aug 10</p>

function NewBlog() {
    return (
        <div className='newblogs'>
            <div className="new-header">
                <p>NEW</p>
                <Link to='/view/all/new'>view all new</Link>
            </div>
            <div className="new-body">
                <ul>
                    <li>{date}<Link to='/newblog/1'>{lorem}</Link></li>
                    <li>{date}<Link to='/newblog/1'>{lorem}</Link></li>
                    <li>{date}<Link to='/newblog/1'>{lorem}</Link></li>
                    <li>{date}<Link to='/newblog/1'>{lorem}</Link></li>
                    <li>{date}<Link to='/newblog/1'>{lorem}</Link></li>
                    <li>{date}<Link to='/newblog/1'>{lorem}</Link></li>
                    <li>{date}<Link to='/newblog/1'>{lorem}</Link></li>
                    <li>{date}<Link to='/newblog/1'>{lorem}</Link></li>
                    <li>{date}<Link to='/newblog/1'>{lorem}</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default NewBlog
