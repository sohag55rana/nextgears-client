

const ModelsCard = ({ item }) => {
    const { image, price, description, name } = item;

    return (
        <div className="card bg-base-100 shadow-sm ">
            <figure className="px-10 pt-10 aspect-[4/3] overflow-hidden">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl w-full h-[250px] object-cover" />
            </figure>
            <p className="absolute mt-22 mr-16 bg-black text-white right-0 text-xl">${(price * 15000).toLocaleString()}</p>
            <div className="card-body items-center text-center  space-y-3">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p>{description}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ModelsCard;