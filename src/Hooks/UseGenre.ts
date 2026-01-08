import { useStatStyles } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import apiClient from "../component/services/api-client";
import { CanceledError } from "axios";

interface Genre{
    id: number;
    name: string
}

interface FetchGenreResponse{
    results : Genre[];
    count : number
}


const UseGenre = () => {
    const [genres, setGenre] = useState<Genre[]>();
    const [error, setError] = useState("")
    const [isLoading, setLoading] = useState(false)
    AbortController

    useEffect(() => {
        const Controller = new AbortController();
        setLoading(true);

        apiClient
            .get<FetchGenreResponse>("/genres", { signal: Controller.signal })
            .then((res) => {
                setGenre(res.data.results);
                setLoading(false)
            })

            .catch((err) => {
                if (err instanceof CanceledError) return;

                setError(err.message)
                setLoading(false);
            });
        return () => Controller.abort();
    }, []);

    return { genres, error, isLoading }
}

export default UseGenre ;