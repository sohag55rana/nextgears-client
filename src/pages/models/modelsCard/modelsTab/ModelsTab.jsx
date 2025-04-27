// import ModelsCard from "../ModelsCard";


// const ModelsTab = ({ items }) => {

//     return (
//         <div>
//             <div className='grid md:grid-cols-3 gap-10'>
//                 {
//                     items.map(item => <ModelsCard key={item._id} item={item}></ModelsCard>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default ModelsTab;

import { useState } from "react";
import ModelsCard from "../ModelsCard";

const ModelsTab = ({ items }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(items.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            {/* Cards */}
            <div className='grid md:grid-cols-3 gap-2'>
                {
                    currentItems.map(item => (
                        <ModelsCard key={item._id} item={item}></ModelsCard>
                    ))
                }
            </div>

            {/* Pagination Buttons */}
            {
                totalPages > 1 && (
                    <div className="flex justify-center mt-8 space-x-2">
                        {
                            [...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handlePageChange(index + 1)}
                                    className={`btn text-3xl px-4 py-4 border rounded ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
                                        }`}
                                >
                                    {index + 1}
                                </button>
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
};

export default ModelsTab;
