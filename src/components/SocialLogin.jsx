import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { googleUser } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogle = () => {
        googleUser()
            .then(result => {
                console.log(result.user);

                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate("/")
                    })
            })
    }
    return (
        <div>
            <button onClick={handleGoogle} className="btn btn-neutral"><FaGoogle></FaGoogle></button>
        </div>
    );
};

export default SocialLogin;