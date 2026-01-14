
import { useEffect, useState } from "react"
import apiClient from "../component/services/api-client";
import { CanceledError } from "axios";


interface FetchResponse<T>{ 
    count : number;
    results : T[];
}


const UseData =<T> (endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("")
    const [isLoading, setLoading] = useState(false)
    AbortController

    useEffect(() => {
        const Controller = new AbortController();
        setLoading(true);

        apiClient
            .get<FetchResponse<T>>(endpoint, { signal: Controller.signal })
            .then((res) => {
                setData(res.data.results);
                setLoading(false)
            })

            .catch((err) => {
                if (err instanceof CanceledError) return;

                setError(err.message)
                setLoading(false);
            });
        return () => Controller.abort();
    }, []);

    return { data, error, isLoading }
}

export default UseData ;