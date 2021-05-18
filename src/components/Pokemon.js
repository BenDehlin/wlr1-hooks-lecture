// To see the class version of this component
// go look in ./ClassComponents/ClassPokemon.js
// Please 
import { useState, useEffect } from "react"
import axios from "axios"

const Pokemon = (props) => {
  // here we create 1 piece of state called
  // pokeInfo that will default to null. after
  // our useEffect fires we plan on 
  // populating this with the pokemon 
  // object we get back from our axios call.
  const [pokeInfo, setPokeInfo] = useState(null)
  // here we destructure the name param we have
  // saved in props.match.params. We grab the
  // end of the url after /pokemon/ and save
  // it as a variable called name
  const { name } = props.match.params

  // Our useEffect is slightly different in this
  // page compared to ./List.js. In the List
  // component our useEffect was simply a
  // componentDidMount but here we've set up
  // the useEffect to be a componentDidMount but ALSO
  // fire again if the name in our Route param changes.
  // This way we can navigate straight from "bulbasaur"
  // to "charmander" (or any other pokemon) and it will
  // refetch the data. The reason this happens is we've put
  // name into our dependency array so we've told react
  // if the name changes we need to fire this useEffect
  // again.
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => {
        setPokeInfo(res.data)
      })
      .catch((err) => console.log(err))
  }, [name])
  return (
    <div>
      <h1>Pokemon Page</h1>
      {/* Here we've set up conditional rendering. When
      our page first loads pokeInfo is null so we've
      set up conditional rendering to check if pokeInfo
      is a truthy value (like an object) before we
      try to render the info that is inside of the
      object. */}
      {pokeInfo ? (
        <div>
          <p>{pokeInfo.name}</p>
          <img src={pokeInfo.sprites.front_default} />
        </div>
      ) : (
        <div>...Loading</div>
      )}
    </div>
  )
}

export default Pokemon
// This was the last example of basic hooks! If you're
// interested in seeing more you could check out the
// ../hooks/useAxios.js hook to see how we might create
// our own hooks. That file will not have notes yet
// but I will try to be sure to add them later.