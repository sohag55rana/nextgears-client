import ModelsCard from "../ModelsCard";


const ModelsTab = ({ items }) => {

    return (
        <div>
            <div className='grid md:grid-cols-3 gap-10'>
                {
                    items.map(item => <ModelsCard key={item._id} item={item}></ModelsCard>)
                }
            </div>
        </div>
    );
};

export default ModelsTab;