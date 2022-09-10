import React ,{useState} from 'react'
import MovieList from './components/MovieList'
import data from './data'
import './App.css'
import Add from './components/Add'
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './components/Filter'

const App = () => {
  const [searchrtg,setSearchtg] = useState(0)
  const [searchtt,setSearchtt] = useState ("")
  const filterName = (searchtt) => {
setSearchtt(searchtt);
  }
  const filterRating = (searchrtg) => {
   setSearchtg (searchrtg);

  }
  const [movies, setMovies] = useState (data);

  const handleAdd =(filmjdid)=> {setMovies([...movies,{...filmjdid,_id:movies.length}])}
  return (
    <div>
      <Filter filterName = {filterName} filterRating = {filterRating} />
            <Add handleAdd={handleAdd}/>

      <MovieList data={movies.filter((el)=>el.Title.toLowerCase().includes(searchtt.trim().toLowerCase())&&(el.Rating >= searchrtg))}/>
    </div>
  )
}

export default App