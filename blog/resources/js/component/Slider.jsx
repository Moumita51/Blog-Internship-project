import React from 'react'

const Category_slider = ({ name }) => {
    return (
        <div className='category-slider'>
            <div className='card'>
                <div className='sliderImg'>
                    <img src="https://i.ibb.co/6N88bvp/10699984.jpg" alt="" />
                </div>
                <div id='slider' className="card-img-overlay" >
                    <h6 className='text' >{name}</h6>
                    <p className='disc'>Discover</p>
                </div>
            </div>
        </div>

    )
}
export default Category_slider