import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../ourMenu/cover/Cover';
import coverImg from '../../assets/image/Harley-Davidson/2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useModels from '../../hooks/useModels';
import ModelsCard from './modelsCard/ModelsCard';
import ModelsTab from './modelsCard/modelsTab/ModelsTab';

const Models = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useModels([]);

    const BMW = menu.filter(item => item.category === 'BMW');
    const harley = menu.filter(item => item.category === 'Harley-Davidson');
    const honda = menu.filter(item => item.category === 'Honda');
    const kawasaki = menu.filter(item => item.category === 'Kawasaki');
    const royal = menu.filter(item => item.category === 'Royal Enfield');
    const yamaha = menu.filter(item => item.category === 'Yamaha');

    return (
        <div>
            <Helmet>
                <title>NEXTGEARS | Models</title>
            </Helmet>
            <Cover img={coverImg} title="Unleash the Power of Two Wheels" designation="Discover the ultimate collection of world-class motorcycle models. From speed to style, adventure to legacy — ride with the spirit that defines freedom."></Cover>
            <div className='text-center mt-12 text-3xl '>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>BMW</Tab>
                        <Tab>Harley-Davidson</Tab>
                        <Tab>Royal Enfield</Tab>
                        <Tab>Honda</Tab>
                        <Tab>Kawasaki</Tab>
                        <Tab>Yamaha</Tab>
                    </TabList>
                    <TabPanel>
                        <ModelsTab items={BMW}></ModelsTab>
                    </TabPanel>
                    <TabPanel>
                        <ModelsTab items={harley}></ModelsTab>
                    </TabPanel>
                    <TabPanel>
                        <ModelsTab items={honda}></ModelsTab>
                    </TabPanel>
                    <TabPanel>
                        <ModelsTab items={kawasaki}></ModelsTab>
                    </TabPanel>
                    <TabPanel>
                        <ModelsTab items={royal}></ModelsTab>
                    </TabPanel>
                    <TabPanel>
                        <ModelsTab items={yamaha}></ModelsTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Models;