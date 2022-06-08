import { useEffect, useState } from "react"


const useFetch = (url: string): Array<any> => {

    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setIsLoading(false);
            setData(data)
        })
        .catch((err) => setHasError(true));

    }, []);

    return [data, isLoading, hasError];

}

export default useFetch;