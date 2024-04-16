import GenresList from "../constant/GenresList"
import MovieList from "./MovieList"

const GenreMovieList = () => {
  return (
    <>
        <div>
            {GenresList.genres.map((item, index) => index <= 4 && (
                <div className="p-8 px-8 md:px-16" key={item.id}>
                    <h2 className="text-[20px] font-bold">{ item.name }</h2>
                    <MovieList genreId={item.id} index_={index} />
                </div>
            ))}
        </div>
    </>
  )
}
export default GenreMovieList