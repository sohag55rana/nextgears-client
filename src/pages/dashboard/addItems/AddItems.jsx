

import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../sheard/sectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        // upload img to imgbb then get url and then use it
        const imgFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imgFile, {
            headers: {
                'content-Type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                description: data.description,
                price: parseFloat(data.price),
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/menu', menuItem)
            console.log(menuRes.data);
            if (menuRes.data.insertedId) {
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log(res.data);
    };

    return (
        <div className="w-2/4">

            <SectionTitle subHeading="what's new" heading="add an item"></SectionTitle>

            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset mb-10">
                    <legend className="fieldset-legend text-start text-xl">Models Name*</legend>
                    <input {...register("name", { required: true })}
                        type="text"
                        className="input w-full"
                        placeholder="Models Name" />
                    {errors.name && <span className="text-red-700">This field is required</span>}
                </fieldset>

                <div className="flex justify-between gap-5">
                    {/* category */}
                    <div className="w-2/4">
                        <legend className="fieldset-legend text-start text-xl">Category*</legend>

                        <select  {...register("category", { required: true })} defaultValue="category" className="select w-full mt-1">
                            <option disabled value='category'>Select a Category</option>
                            <option value="BMW">BMW</option>
                            <option value="honda">Honda</option>
                            <option value="kawasaki">Kawasaki</option>
                            <option value="harley">Harley-Davidson</option>
                            <option value="royal">Royal Enfield</option>
                            <option value="yamaha">Yamaha</option>
                            {errors.category && <span className="text-red-700">This field is required</span>}
                        </select>


                    </div>
                    <fieldset className="fieldset mb-10 w-2/4">
                        <legend className="fieldset-legend text-start text-xl">Price*</legend>
                        <input {...register("price", { required: true })}
                            type="number"
                            className="input"
                            placeholder="Price" />
                        {errors.price && <span className="text-red-700">This field is required</span>}
                    </fieldset>
                </div>


                <fieldset className="fieldset mb-10 w-full">
                    <legend className="text-start text-xl fieldset-legend">Models Details*</legend>
                    <textarea  {...register("description", { required: true })} className="textarea h-24 w-full" placeholder="Models Details"></textarea>
                    {errors.description && <span className="text-red-700">This field is required</span>}
                </fieldset>

                <div className="flex items-start text-xl mb-10">
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-primary w-3/4" />
                    {errors.image && <span className="text-red-700">This field is required</span>}
                </div>

                <button className="btn text-xl btn-neutral"> <FaUtensils></FaUtensils> Add Item</button>
            </form>
        </div>
    );
};

export default AddItems;