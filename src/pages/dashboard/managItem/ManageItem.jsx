import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useModels from "../../../hooks/useModels";
import SectionTitle from "../../sheard/sectionTitle/SectionTitle";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageItem = () => {
    const [menu] = useModels()
    const axiosSecure = useAxiosSecure();

    const handleUpdate = id => {
        console.log('update', id);
    }

    const handleDelete = item => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: `${item.name} has been deleted`,
                        icon: "success"
                    });
                }

                console.log('delete it');

            }
        });
    }
    return (
        <div>
            <SectionTitle subHeading="Manage All Item" heading="Hurry Up"></SectionTitle>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">

                                                <LazyLoadImage
                                                    alt=""
                                                    effect="blur"
                                                    src={item.image}
                                                    height="300px"
                                                    width="auto"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>৳{item.price * 15000}</td>

                                <td>
                                    <button onClick={() => handleUpdate(item)} className="text-xl bg-blue-200 text-red-700 btn btn-ghost btn-xs">
                                        <FaEdit></FaEdit>
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="text-xl bg-blue-200 text-red-700 btn btn-ghost btn-xs">
                                        <FaTrashAlt></FaTrashAlt>
                                    </button>
                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageItem;