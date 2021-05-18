// import {useState, useEffect} from 'react'
// import axios from 'axios'
import Poke from './Poke'
import useAxios from '../hooks/useAxios'

const List = () => {
  const [pokemon, setPokemon] = useAxios('https://pokeapi.co/api/v2/pokemon/', 'results')
  console.log(pokemon)
  // const [pokemon, setPokemon] = useState([])

  // useEffect(() => {
  //   axios.get('https://pokeapi.co/api/v2/pokemon/')
  //   .then(res => setPokemon(res.data.results))
  //   .catch(err => console.log(err))
  // }, [])
  
  return(
    <div>
      <h1>List</h1>
      {pokemon.map((poke) => {
        return(
          <Poke key={poke.name} poke={poke} />
        )
      })}
    </div>
  )
}
export default List