// This component is simply displaying
// the name of each pokemon in the list
// and linking to the correct page so we
// can go view extra info about the
// pokemon.
import { Link } from "react-router-dom"

const Poke = (props) => {
  return (
    <div>
      {/* Notice how we are linking to
      '/pokemon/' and we are taking the
      name from our poke prop and putting
      it on the end. If you go look in our
      routes page you'll see we convert
      this "name" into a param for the
      /pokemon/ route. That means our
      ./Pokemon.js component will have
      access to the name in its props
      as props.match.params.name */}
      <Link to={`/pokemon/${props.poke.name}`}>{props.poke.name}</Link>
    </div>
  )
}

export default Poke
// Let's go look at the ./Pokemon component
// to see what this component links to.