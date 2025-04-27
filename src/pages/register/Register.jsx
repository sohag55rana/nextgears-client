import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const Register = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    console.log(watch("example"))

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 md:w-1/2 max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-3xl font-bold mb-5">Register Here!</h1>
                    <p className="mb-5">Already have an account? <Link to="/login" className='text-green-800 '> Login an account</Link></p>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" {...register("name", { required: true })} name="name" className="input" placeholder="Name" />
                            {errors.name && <span>This field is required</span>}
                            <label className="label">Email</label>
                            <input type="email" {...register("email", { required: true })} name="email" className="input" placeholder="Email" />
                            {errors.email && <span>This field is required</span>}
                            <label className="label">Password</label>
                            <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20 })} name="password" className="input" placeholder="Password" />
                            {errors.password && <span>This field is required</span>}


                            <input className="btn btn-neutral mt-4" type="submit" value="Register" />
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;