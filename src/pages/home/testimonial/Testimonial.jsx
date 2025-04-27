import SectionTitle from "../../sheard/sectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="mb-20">
            <SectionTitle subHeading='---What Our Clients Say---' heading='TESTIMONIALS'>
            </SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <div>
                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className="flex flex-col items-center mx-20 space-y-5 text-center">

                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <FaQuoteLeft className="text-5xl"></FaQuoteLeft>
                                <p className="text-2xl">{review.details}</p>
                                <h2><span className="text-3xl">{review.name}</span> , <span className="2xl">{review.place}</span></h2>
                            </div>
                        </SwiperSlide>)
                    }
                </div>
            </Swiper>
        </section>
    );
};

export default Testimonial;