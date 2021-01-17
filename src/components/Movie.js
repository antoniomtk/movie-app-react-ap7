// Change vote number color function
const setVoteClass = (vote) => {
   if(vote >= 8) {
      return 'green';
   }
   else if (vote >= 6) {
      return 'orange';
   } else {
      return 'red';
   }
}

// get movie data via props and destructure it for using here...
const Movie = ( {title, poster_path, overview, vote_average } ) => {
   return (
      <div className='movie'>
         {/* Sets the movie poster image, if no image is provided by API, use some default images. */}
         <img src={(poster_path ? process.env.REACT_APP_IMG_MOVIE + poster_path : process.env.REACT_APP_DEFAULT_IMG)} alt={title} />
         <div className='movie-info'>
            <h3>{title}</h3>
            <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
         </div>
         <div className='movie-over'>
            <h2>{title}</h2>    
            <p>{overview}</p>
         </div>
      </div>
   );
}

export default Movie;