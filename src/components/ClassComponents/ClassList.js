import { Component } from "react"
import axios from "axios"
import Poke from "../Poke"

class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      pokemon: [],
    }
  }

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => {
        this.setState({ pokemon: res.data.results })
      })
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <div>
        <h1>List</h1>
        {this.state.pokemon.map((poke) => {
          return <Poke key={poke.name} poke={poke} />
        })}
      </div>
    )
  }
}

export default ClassList