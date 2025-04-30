import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";


const ModelsCard = ({ item }) => {
    const { image, price, description, name } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddCart = model => {
        console.log(model);
        if (user && user.email) {
            // TODO
        }
        else {
            Swal.fire({
                title: "You are not logged In",
                text: "Please login to add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    return (
        <div className="card bg-base-100 shadow-sm ">
            <figure className="px-5 pt-5 aspect-[4/3] overflow-hidden">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl w-full h-[250px] object-cover" />
            </figure>
            <p className="absolute mt-10 mr-10 bg-black text-white right-0 text-xl">৳{(price * 15000).toLocaleString()}</p>
            <div className="card-body items-center text-center  space-y-3">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p>{description}</p>
                <div className="card-actions">
                    <button onClick={() => handleAddCart(item)} className="btn text-green-950 text-xl btn-neutral btn-dash">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ModelsCard;