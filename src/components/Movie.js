let REACT_APP_IMG_MOVIE = 'https://image.tmdb.org/t/p/w1280'
let REACT_APP_DEFAULT_IMG = 'https://images.unsplash.com/photo-1576788445812-0933cb14461f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vdmllfGVufDB8MXwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'

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
         <img src={(poster_path ? REACT_APP_IMG_MOVIE + poster_path : REACT_APP_DEFAULT_IMG)} alt={title} />
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