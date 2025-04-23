
import { Helmet } from 'react-helmet-async';
import Banner from './banner/Banner';
import Category from './category/Category';
import Featured from './featured/Featured';
import PopularMenu from './popularMenu/PopularMenu';
import Testimonial from './testimonial/Testimonial';

const Home = () => {
    return (
        <div className=''>
            <Helmet>
                <title>NEXTGEARS | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className='px-40'>
                <Category></Category>
                <PopularMenu></PopularMenu>
            </div>
            <Featured></Featured>
            <div className='px-40'>
                <Testimonial></Testimonial>
            </div>
        </div>
    );
};

export default Home;