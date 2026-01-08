
import UseGenre from "../Hooks/UseGenre";

const Genre = ()=>{

    const {genres} = UseGenre();

    return(

     <ul>
        {genres?.map(genre => <li key={genre.id}> {genre.name}</li>)}
     </ul>
    )

}

export default Genre;