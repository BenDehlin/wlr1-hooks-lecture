import Poke from './Poke'
import useAxios from '../hooks/useAxios'

const List = () => {
  const [pokemon, setPokemon] = useAxios('https://pokeapi.co/api/v2/pokemon/', 'results')
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