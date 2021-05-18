// To see the class version of this component look in
// ./ClassComponents/ClassForm.js. Here we have a simple
// component where we have 2 pieces of state, one for
// username and one for password that will be tied
// to an input field for each.
import { useState } from "react"

const Form = () => {
  // here we define 2 pieces of state, one for username
  // and one for password. Notice how they each have
  // their own unique set function. They both also
  // default to an empty string.
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div>
      <h1>Form</h1>
      {/* Here our input fields have a value that ties
      them to their appropriate piece of state and
      they have an onChange that simply calls the
      function we defined up above and passes in
      e.target.value. */}
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* Notice here in order to alert the username
      and password we do not need to say
      this.state.username we can just reference
      username directly. */}
      <button
        onClick={() => alert(`Username: ${username}, Password: ${password}`)}
      >
        Login
      </button>
    </div>
  )
}
export default Form
// Next let's go look at the List component to see
// the useEffect and useState hooks together.