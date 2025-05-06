import SectionTitle from "../../sheard/sectionTitle/SectionTitle";
import { useForm } from "react-hook-form";

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <SectionTitle subHeading="what's new" heading="add an item"></SectionTitle>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} />

                <select  {...register("category")} defaultValue="category" className="select">

                    <option disabled value='category'>Select a Category</option>
                    <option value="BMW">BMW</option>
                    <option value="honda">Honda</option>
                    <option value="kawasaki">Kawasaki</option>
                    <option value="royal">Royal Enfield</option>
                    <option value="yamaha">Yamaha</option>
                </select>

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddItems;