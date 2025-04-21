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

const Category = () => {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide><img className='w-[312px]' src={img9} alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-[312px]' src={img11} alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-[312px]' src={img12} alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-[312px]' src={img13} alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-[312px]' src={img14} alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-[312px]' src={img10} alt="" /></SwiperSlide>

        </Swiper>
    );
};

export default Category;