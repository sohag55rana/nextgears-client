import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../assets/image/1.jpg'
import img2 from '../../../assets/image/2.jpg'
import img3 from '../../../assets/image/3.jpg'
import img4 from '../../../assets/image/4.jpg'
import img5 from '../../../assets/image/5.jpg'
import img6 from '../../../assets/image/6.jpg'
import img7 from '../../../assets/image/7.jpg'
const Banner = () => {
    return (
        <div className="mx-auto items-center text-center">
            <Carousel
            // autoPlay={true}
            // interval={3000}
            // infiniteLoop={true}

            >
                <div className="h-[800px]">
                    <img src={img2} />
                </div>
                <div className="h-[800px]">
                    <img src={img1} />
                </div>
                <div className="h-[800px]">
                    <img src={img3} />
                </div>
                <div className="h-[800px]">
                    <img src={img4} />
                </div>
                <div className="h-[800px]">
                    <img src={img5} />
                </div>
                <div className="h-[800px]">
                    <img src={img6} />
                </div>
                <div className="h-[800px]">
                    <img src={img7} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;