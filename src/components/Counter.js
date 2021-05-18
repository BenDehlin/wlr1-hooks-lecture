// To see the class version of this component go
// look in ./ClassComponents/ClassCounter.js
// This component keeps track of a state we've
// called count and uses a function we've called
// setCount in order to update that state.
import {useState} from 'react'

const Counter = (props) => {
  // here at the top of our component we define
  // our state by saying "const" and then using
  // square brackets. The first thing in the 
  // square brackets will be whatever we want
  // to call our state and the second thing
  // in the square brackets is a function
  // that will update that state. We can name
  // either thing whatever we want.
  const [count, setCount] = useState(0)

  return(
    <div>
      <h1>Counter</h1>
      {/* Note how we don't have to specify
      this.state.count in order to access our
      state here. */}
      <h2>{count}</h2>
      {/* When we want to update our state we simply
      need to call whatever we named our set
      function and pass in what we want the
      new value to be. In this case I am calling
      the function 2 different times, one to
      increment the count and one to decrement. */}
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default Counter
// Next let's go look at ./Form.js to see how we would
// handle input fields in a functional component