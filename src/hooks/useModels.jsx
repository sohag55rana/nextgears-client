// import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
// import useAxiosPublic from "./useAxiosPublic";


const useModels = () => {


    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                setMenu(data)
                setLoading(false)
            })
    }, [])
    return [menu, loading]
};

export default useModels;