import { Helmet } from 'react-helmet-async';
import PopularMenu from '../pages/home/popularMenu/PopularMenu';
import useModels from '../hooks/useModels';
import MenuCategory from './menuCategory/MenuCategory';
import menuImg from '../assets/image/Banner/12.jpg'

const OurMenu = () => {
    const [menu] = useModels([]);
    const BMW = menu.filter(item => item.category === 'BMW')
    return (
        <div>
            <Helmet>
                <title>NEXTGEARS | Menu</title>
            </Helmet>

            <PopularMenu></PopularMenu>

            <MenuCategory items={BMW} title="BMW" img={menuImg}></MenuCategory>


        </div>
    );
};

export default OurMenu;