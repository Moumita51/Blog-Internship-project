import React from 'react'

import Map from '../component/Map';
import Mycontact from '../component/Mycontact';



const location = {
    address: 'Mirpur-10, Dhaka-1216, Bangladesh',
    lat: 23.822350,
    lng: 90.365417,
} 


const Contact = () => {
    return (
        <section className='content'>
            {/* <h1>LatestBlogs.......jj...</h1> */}
            {/* <ContactSection /> */}
            <Mycontact />
            <Map location={location} zoomLevel={17} />
        </section>
    )
}
export default Contact