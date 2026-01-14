
import useData from "./useData";

export interface Genre{
    id: number;
    name: string
    image_background: string;
}




const UseGenre = () =>  useData<Genre>('/genres');

export default UseGenre ;