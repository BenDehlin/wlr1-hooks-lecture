import {useState, useEffect} from 'react'
import axios from 'axios'

const Pokemon = (props) => {
  const [pokeInfo, setPokeInfo] = useState(null)
  const {name} = props.match.params

  useEffect(() => {
    console.log(props)
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((res) => {
      setPokeInfo(res.data)
    }).catch((err) => console.log(err))
  }, [name])

  console.log(pokeInfo)
  return(
    <div>
      <h1>Pokemon Page</h1>
      {pokeInfo ? (
        <div>
          <p>{pokeInfo.name}</p>
          <img src={pokeInfo.sprites.front_default} />
        </div>
      ):(
        <div>...Loading</div>
      )}
    </div>
  )
}

export default Pokemon