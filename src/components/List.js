// When we worked in this file during class I refactored
// this component to use our custom hook. I have changed
// this component back to not use the custom hook
// because custom hooks are confusing for some students.
// If you'd like to see the custom hook version of this
// component look in ./ListUsingCustomHook.js. If you'd
// like to see the class version of this component
// look in ./ClassComponents/ClassList.js.
// This component simply tracks an array we've called
// "pokemon" that defaults to an empty array. When
// the page loads it goes and gets information
// from the pokeapi and saves it to the array. We then
// map over the array and render the ./Poke.js component
// for each item in our array.
import {useState, useEffect} from 'react'
import axios from 'axios'
import Poke from './Poke'

const List = () => {
  // here we create a piece of state called pokemon
  // and a function called setPokemon to update that state
  const [pokemon, setPokemon] = useState([])

  // useEffects take 2 arguments, a callback function
  // and a dependency array. By default the array will
  // be blank and if so the useEffect will be a
  // componentDidMount. Always include this array.
  useEffect(() => {
    // our useEffect does the axios call and takes
    // the results and saves them to our pokemon
    // state.
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(res => setPokemon(res.data.results))
    .catch(err => console.log(err))
  }, [])
  
  return(
    <div>
      <h1>List</h1>
      {/* Here we map over the pokemon array and render
      a Poke component for each item. Notice how
      we don't have to say this.state.pokemon here. */}
      {pokemon.map((poke) => {
        // we're passing a prop with the pokemon's info
        // called "poke" to the child component.
        return(
          <Poke key={poke.name} poke={poke} />
        )
      })}
    </div>
  )
}
export default List
// Next let's go briefly look at ./Poke.js so we can
// see what this component here is rendering for each
// item in the pokemon array.