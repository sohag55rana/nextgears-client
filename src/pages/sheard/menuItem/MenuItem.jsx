

const MenuItem = ({ item }) => {
    const { image, price, description, name } = item;
    return (
        <div className="flex space-x-4">
            <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[120px] h-[104px]" src={image} alt="" />
            <div>
                <h3 className="text-xl">{name}</h3>
                <p className="text-[#737373]">{description}</p>
            </div>
            <p className="text-[#BB8506]">${price}</p>
        </div>
    );
};

export default MenuItem;