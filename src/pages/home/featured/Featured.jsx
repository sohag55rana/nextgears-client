import SectionTitle from "../../sheard/sectionTitle/SectionTitle";
import featImg from '../../../assets/image/yamaha/22.jpg'
import './featured.css'
import { Link } from "react-router-dom";

const Featured = () => {
    return (
        <section className="featured-image bg-fixed py-32 text-white mb-32">
            <SectionTitle
                subHeading='---Check it out---'
                heading='FROM OUR MENU'
            ></SectionTitle>
            <div className="md:flex justify-center items-center px-40">
                <img className=" w-[648px] mr-14" src={featImg} alt="" />
                <div className="space-y-4">
                    <h2 className="text-2xl">{new Date().toLocaleDateString()}</h2>
                    <h2 className="text-2xl">
                        WHERE CAN I GET SOME?
                    </h2>
                    <p>Experience unmatched thrill and satisfaction with this exclusive ride. Built for true motorcycle enthusiasts, it delivers power, comfort, and style like no other. Once you try it, you won’t want anything else — because bikes like this aren’t found just anywhere.</p>
                    <Link to="/models"><button className="btn btn-neutral btn-outline text-red-600 border-white text-2xl p-5 border-0 rounded-xl border-b-4">Order Now</button></Link>
                </div>

            </div>
        </section>
    );
};

export default Featured;