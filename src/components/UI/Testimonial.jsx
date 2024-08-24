



import React from 'react'
import Slider from 'react-slick'
import av01 from '../../assets/all-images/ava-1.jpg'
import av02 from '../../assets/all-images/ava-2.jpg'
import av03 from '../../assets/all-images/ava-3.jpg'
import av04 from '../../assets/all-images/ava-4.jpg'
import '../../styles/testimonial.css'
const Testimonial = () => {
    
        const settings = {
          dots: true,
          infinite: true,
          autoplay: true,
          speed: 1000,
          swipeToSlide: true,
          autoplaySpeed: 2000,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        };
      
  return (
   <Slider {...settings}>
    <div className="testimonial py-4 px-3">
        <p className="section__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nam, repellat minima incidunt voluptatibus unde laudantium modi cum voluptatem consectetur necessitatibus ex officiis placeat minus maiores pariatur libero veritatis. Neque.

        </p>
        <div className='mt-3 d-flex align-items-center gap-4'>
            <img src={av01} alt="" className='w-25 h-25 rounded-2' />
            <div>
                <h6 className='mb-0 mt-3'>John Doe</h6>
                <p className="section__description">Customer</p>
            </div>
        </div>
    </div>


    <div className="testimonial py-4 px-3">
        <p className="section__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nam, repellat minima incidunt voluptatibus unde laudantium modi cum voluptatem consectetur necessitatibus ex officiis placeat minus maiores pariatur libero veritatis. Neque.

        </p>
        <div className='mt-3 d-flex align-items-center gap-4'>
            <img src={av02} alt="" className='w-25 h-25 rounded-2' />
            <div>
                <h6 className='mb-0 mt-3'>John Doe</h6>
                <p className="section__description">Customer</p>
            </div>
        </div>
    </div>


    <div className="testimonial py-4 px-3">
        <p className="section__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nam, repellat minima incidunt voluptatibus unde laudantium modi cum voluptatem consectetur necessitatibus ex officiis placeat minus maiores pariatur libero veritatis. Neque.

        </p>
        <div className='mt-3 d-flex align-items-center gap-4'>
            <img src={av03} alt="" className='w-25 h-25 rounded-2' />
            <div>
                <h6 className='mb-0 mt-3'>John Doe</h6>
                <p className="section__description">Customer</p>
            </div>
        </div>
    </div>


    <div className="testimonial py-4 px-3">
        <p className="section__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nam, repellat minima incidunt voluptatibus unde laudantium modi cum voluptatem consectetur necessitatibus ex officiis placeat minus maiores pariatur libero veritatis. Neque.

        </p>
        <div className='mt-3 d-flex align-items-center gap-4'>
            <img src={av04} alt="" className='w-25 h-25 rounded-2' />
            <div>
                <h6 className='mb-0 mt-3'>John Doe</h6>
                <p className="section__description">Customer</p>
            </div>
        </div>
    </div>
   </Slider>
  )
}

export default Testimonial