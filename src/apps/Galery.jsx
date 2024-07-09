import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import Image1 from './GalleryImages/image1.jpg'
import Image2 from './GalleryImages/image2.jpg'
import Image3 from './GalleryImages/image3.jpg'

function Galery() {
  return (
    <section className='galery'>
      <span>Galery</span>
      <div className="galery__scroll">
        <img src={Image1} alt="" />
        <img src={Image2} alt="" />
        <img src={Image3} alt="" />
      </div>
    </section>
  )
}

export default Galery
