import MenuItem from "../../pages/sheard/menuItem/MenuItem";
import Cover from "../cover/Cover";

const MenuCategory = ({ items, title, img }) => {

    return (
        <div>
            {title && <Cover img={img} title="Our Menu" designation="This is superb Models"></Cover>}
            <div className="grid md:grid-cols-2 gap-4 text-start">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;