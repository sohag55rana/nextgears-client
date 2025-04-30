import { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../auth/AuthProvider';
import loginLottieData from '../../assets/lottie/login.json'
import Lottie from 'lottie-react';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth';
import auth from '../../firebase/firebase.config';

const Login = () => {

    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState('');
    // const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const emailRef = useRef();

    const from = location.state?.from?.pathname || "/"

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password }
        // setErrorMessage('')

        signIn(email, password)
            .then(result => {
                const user = result.user;
                if (!user.emailVerified) {
                    Swal.fire({
                        title: 'Email Not Verified',
                        text: 'Please verify your email before logging in. A verification email has been sent to your email address.',
                        showCancelButton: true,
                        icon: 'warning',
                        confirmButtonText: 'Resend Verification Email',
                        cancelButtonText: 'Cancel',
                    })

                        .then((result) => {
                            if (result.isConfirmed) {
                                sendEmailVerification(user)
                                    .then(() => {
                                        Swal.fire({
                                            position: "center",
                                            icon: "success",
                                            title: "Verification Email Sent!",
                                            text: "Check your inbox (or spam folder).",
                                            showConfirmButton: false,
                                            timer: 1500
                                        });
                                    })
                                    .catch((error) => {
                                        Swal.fire({
                                            position: "center",
                                            icon: "error",
                                            title: "Error Sending Email!",
                                            text: error.message,
                                            showConfirmButton: false,
                                            timer: 1500
                                        });
                                    });
                            }
                        });
                    // logOut()
                    //     .then(() => { })
                    // return;
                }
                else {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Login Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate(from, { replace: true })
                }

                console.log(user, 'user user user');
            })
            .catch(error => {
                console.error(error.message);
                // setErrorMessage(error.message)
                let errorMessage = '';

                if (error.code === 'auth/invalid-credential') {
                    errorMessage = 'Invalid Email Address or Password did not match';
                }


                // ✅ Show Toast
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'error',
                    title: errorMessage,
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                });

            })
        console.log(user);
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        console.log(user_captcha_value);
        setError("")
        if (validateCaptcha(user_captcha_value) == true) {
            setDisabled(false)

        }

        else {
            setError('Captcha Does Not Match');
            return;
        }

    }

    const handleForgetPass = () => {
        console.log('click click');
        const email = emailRef.current.value;
        if (!email) {
            alert("Plese Provide A Valid Email Address")
        }
        else {
            sendPasswordResetEmail(auth, emailRef.current.value)
                .then(() => {
                    alert('Reset Email Send, Please Cheack Your Email')
                })
                .catch((error) => {
                    console.error(error.message);

                    // ..
                });
        }
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <Helmet>
                <title>NEXTGEARS | Login</title>
            </Helmet>
            <div className="hero-content flex-col md:flex-row">
                <div className="text-center md:w-1/2 lg:text-left">

                    <Lottie animationData={loginLottieData}></Lottie>
                </div>
                <div className="card bg-base-100 md:w-1/2 max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-3xl font-bold mb-5">Login Here!</h1>
                    <p>Don't have an account yet? <Link to="/register" className='text-green-800 '> Create an account</Link></p>
                    <form onSubmit={handleLogin} className="card-body relative">
                        <fieldset className="fieldset relative">
                            <label className="label">Email</label>
                            <input type="email" ref={emailRef} name="email" className="input mb-6" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type={showPassword ? 'text' : 'password'} name="password" className="input" placeholder="Password" />
                            <button type='button' onClick={() => setShowPassword(!showPassword)} className='btn text-xl btn-xs absolute right-10 top-32 '>
                                {showPassword ? <FaEyeSlash ></FaEyeSlash> : <FaEye></FaEye>} </button>
                            <div onClick={handleForgetPass}><a className="link link-hover">Forgot password?</a></div>
                            <label className="label"><LoadCanvasTemplate /></label>
                            <input type="text" onBlur={handleValidateCaptcha} name="captcha" className="input" placeholder="Enter Your captcha" />


                            <input disabled={disabled} className="btn btn-neutral mt-4" type="submit" value="Login" />
                        </fieldset>
                    </form>
                    <p className='text-xl text-red-800 text-center'>{error}</p>
                    {/* {
                        errorMessage && <p>{errorMessage}</p>
                    } */}
                </div>
            </div>
        </div>
    );
};

export default Login;