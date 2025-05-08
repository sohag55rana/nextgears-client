import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import img8 from '../../../assets/image/Banner/8.jpg'
import img9 from '../../../assets/image/Banner/9.jpg'
import img10 from '../../../assets/image/Banner/10.jpg'
import img11 from '../../../assets/image/Banner/11.jpg'
import img12 from '../../../assets/image/Banner/12.jpg'
import img13 from '../../../assets/image/Banner/13.jpg'
import img14 from '../../../assets/image/Banner/14.jpg'
import img15 from '../../../assets/image/Banner/15.jpg'
import img16 from '../../../assets/image/Banner/16.jpg'
import img18 from '../../../assets/image/Banner/18.jpg'
import img19 from '../../../assets/image/Banner/19.jpg'
import img20 from '../../../assets/image/Banner/20.jpg'
import SectionTitle from '../../sheard/sectionTitle/SectionTitle';

const Category = () => {
    return (
        <section className='my-20'>
            <SectionTitle subHeading="---From 11:00am to 10:00pm---" heading="ORDER ONLINE"></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img loading="eager" className='w-[312px]' src={img9} alt="" /></SwiperSlide>
                <SwiperSlide><img loading="eager" className='w-[312px]' src={img11} alt="" /></SwiperSlide>
                <SwiperSlide><img loading="eager" className='w-[312px]' src={img12} alt="" /></SwiperSlide>
                <SwiperSlide><img loading="eager" className='w-[312px]' src={img13} alt="" /></SwiperSlide>
                <SwiperSlide><img loading="eager" className='w-[312px]' src={img14} alt="" /></SwiperSlide>
                <SwiperSlide><img loading="eager" className='w-[312px]' src={img15} alt="" /></SwiperSlide>
                <SwiperSlide><img loading="eager" className='w-[312px]' src={img16} alt="" /></SwiperSlide>
                <SwiperSlide><img loading="eager" className='w-[312px]' src={img18} alt="" /></SwiperSlide>
                <SwiperSlide><img loading="eager" className='w-[312px]' src={img19} alt="" /></SwiperSlide>
                <SwiperSlide><img loading="eager" className='w-[312px]' src={img20} alt="" /></SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;