import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import registerLottieData from '../../assets/lottie/register.json'
import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../auth/AuthProvider";
import { useContext } from "react";
import { sendEmailVerification } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin";

const Register = () => {
    const axiosPublic = useAxiosPublic();

    const {
        register, handleSubmit, reset, formState: { errors }, } = useForm();

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                updateUserProfile(data.name, data.photoUrl)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database');
                                    reset();
                                    Swal.fire({
                                        title: "Account Successfull.Check your Email inbox for verification(or spam folder).",
                                        width: 600,
                                        padding: "3em",
                                        color: "#716add",
                                        background: "#fff url(/images/trees.png)",
                                        backdrop: `
                              rgba(0,0,123,0.4)
                              url("/images/nyan-cat.gif")
                              left top
                              no-repeat
                            `
                                    });

                                    navigate("/")
                                }
                            })
                        console.log('updateUserProfile');

                    })
                    .catch(error => console.error(error.message)
                    )
                console.log(user);

                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        console.log('Email verification sent!');
                    });

            })

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <Helmet>
                <title>NEXTGEARS | Register</title>
            </Helmet>
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className="text-center w-1/2 lg:text-left">
                    <Lottie animationData={registerLottieData}></Lottie>
                </div>
                <div className="card bg-base-100 max-w-sm shrink-0 shadow-2xl w-3/4">
                    <h1 className="text-3xl font-bold mb-5">Register Here!</h1>
                    <p className="mb-5">Already have an account? <Link to="/login" className='text-green-800 '> Login an account</Link></p>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" {...register("name", { required: true })} name="name" className="input" placeholder="Name" />
                            {errors.name && <span>This field is required</span>}
                            <label className="label">PhotoUrl</label>
                            <input type="text" {...register("photoUrl", { required: true })} name="photoUrl" className="input" placeholder="PhotoUrl" />
                            {errors.photoUrl && <span>This field is required</span>}
                            <label className="label">Email</label>
                            <input type="email" {...register("email", { required: true })} name="email" className="input" placeholder="Email" />
                            {errors.email && <span>This field is required</span>}
                            <label className="label">Password</label>
                            <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20 })} name="password" className="input" placeholder="Password" />
                            {errors.password && <span className="text-red-400">This field is required</span>}


                            <input className="btn btn-neutral mt-4" type="submit" value="Register" />
                        </fieldset>
                    </form>
                    <div className='text-center'>
                        <p className='mb-3'>Or Register with</p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;