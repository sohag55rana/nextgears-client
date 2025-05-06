

const MenuItem = ({ item }) => {
    const { image, price, designation, name } = item;
    return (
        <div className="flex space-x-4 mr-10">
            <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[120px] h-[104px]" src={image} alt="" />
            <div>
                <h3 className="text-xl">{name}</h3>
                <p className="text-[#737373]">{designation}</p>
            </div>
            <p className="text-[#BB8506]">৳{price * 15000}</p>
        </div>
    );
};

export default MenuItem;