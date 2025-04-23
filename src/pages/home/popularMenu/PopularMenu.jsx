import SectionTitle from "../../sheard/sectionTitle/SectionTitle";
import MenuItem from "../../sheard/menuItem/MenuItem";
import { Link } from "react-router-dom";
import useModels from "../../../hooks/useModels";


const PopularMenu = () => {
    const [menu] = useModels();
    const menuItem = menu.filter(item => item.category === 'popular');

    return (
        <section className="mb-16 text-center">
            <SectionTitle
                subHeading="---Check it out---"
                heading="Our Popular Modals"
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-4 text-start">
                {
                    menuItem.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <Link to="/models"><button className="btn btn-neutral btn-outline text-green-500 border-black text-2xl p-5 border-0 rounded-xl border-b-4 text-center mt-10">View All Models</button></Link>


        </section>
    );
};

export default PopularMenu;