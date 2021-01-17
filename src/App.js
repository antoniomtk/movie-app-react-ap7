import { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/Movie';
import Footer from './components/Footer'

const App = () =>  {

   // Variables for movies and input text
   const [ movies, setMovies ] = useState([]);
   const [ searchText, setSearchText ] = useState('');
   
   // Runs only once after page is loaded, no dependecies added
   useEffect(() => {
      getMovies(process.env.REACT_APP_FEATURED_MOVIES)
   }, []);

   const getMovies = (API) => {
      fetch(API)
      .then(res => res.json()).then(data => {
         setMovies(data.results); // store api data into a movie variable
      })
   }

   const handleOnSubmit = (e) => {
      e.preventDefault(); // prevent form reload page after submit
      if(searchText) { // Check if some text is entered
         getMovies(process.env.REACT_APP_SEARCH_MOVIE + searchText) // call search API with appended SearchText
         setSearchText(''); // reset input field after search is activated
      } 
   }

   // Handling input text changes
   const handleOnChange = (e) => {
      setSearchText(e.target.value);
   }

   return (
      <> 
      <header>
         <form onSubmit={handleOnSubmit}>
            <input 
               className="search"
               type="search"
               placeholder="Search movie..."
               value={searchText}
               onChange={handleOnChange}
            />
         </form>         
      </header>  
      <div className="movie-container">          
      {
         movies.map(movie => (
            <Movie key={movie.id} {...movie} />
         ))
      }
      </div>
      <Footer />
      </>
   );
}

export default App;