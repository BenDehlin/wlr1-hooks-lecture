import { Component } from "react"

class ClassPokemon extends Component {
  constructor() {
    super()
    this.state = {
      pokeInfo: null,
    }
  }

  componentDidMount() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.name}`)
      .then((res) => {
        this.setState({ pokeInfo: res.data })
      })
      .catch((err) => console.log(err))
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.name !== this.props.match.params.name) {
      axios
        .get(
          `https://pokeapi.co/api/v2/pokemon/${this.props.match.params.name}`
        )
        .then((res) => {
          this.setState({ pokeInfo: res.data })
        })
        .catch((err) => console.log(err))
    }
  }

  render() {
    return (
      <div>
        <h1>Pokemon Page</h1>
        {this.state.pokeInfo ? (
          <div>
            <p>{this.state.pokeInfo.name}</p>
            <img src={this.state.pokeInfo.sprites.front_default} />
          </div>
        ) : (
          <div>...Loading</div>
        )}
      </div>
    )
  }
}

export default ClassComponent
