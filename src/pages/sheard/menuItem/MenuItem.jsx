import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const MenuItem = ({ item }) => {
    const { image, price, designation, name } = item;
    return (
        <div className="flex space-x-4 mr-10">
            {/* <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[120px] h-[104px]" src={image} alt="" /> */}
            <LazyLoadImage
                alt=""
                effect="blur"
                style={{ borderRadius: '0 200px 200px 200px' }}
                className="w-[120px] h-[104px]"
                src={image}
            // height="104px"
            // width="120px"
            />
            <div>
                <div>
                    <h3 className="text-xl">{name}</h3>
                    <p className="text-[#737373]">{designation}</p>
                </div>
                <p className="text-[#BB8506]">৳{price * 15000}</p>
            </div>
        </div>
    );
};

export default MenuItem;