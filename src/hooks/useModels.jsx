import { useEffect, useState } from "react";


const useModels = () => {

    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/models')
            .then(res => res.json())
            .then(data => {
                setMenu(data)
                setLoading(false)
            })
    }, [])
    return [menu, loading]
};

export default useModels;