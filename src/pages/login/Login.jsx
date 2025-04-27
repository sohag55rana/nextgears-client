import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../auth/AuthProvider';

const Login = () => {

    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState('');
    const { signIn } = useContext(AuthContext);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password }
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user, 'user user user');
            })
        console.log(user);
    }

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value) == true) {
            setDisabled(false)
        }

        else {
            setError('Captcha Does Not Match');
            return;
        }
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col md:flex-row">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 md:w-1/2 max-w-sm shrink-0 shadow-2xl">
                    <p>Don't have an account yet? <Link to="/register" className='text-green-800 '> Create an account</Link></p>
                    <form onSubmit={handleLogin} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <label className="label"><LoadCanvasTemplate /></label>
                            <input type="text" ref={captchaRef} name="captcha" className="input" placeholder="Enter Your captcha" />
                            <button onClick={handleValidateCaptcha} className="btn btn-outline btn-accent btn-xs">Accent</button>

                            <input disabled={disabled} className="btn btn-neutral mt-4" type="submit" value="Login" />
                        </fieldset>
                    </form>
                    <p className='text-xl text-red-800 text-center'>{error}</p>
                </div>
            </div>
        </div>
    );
};

export default Login;