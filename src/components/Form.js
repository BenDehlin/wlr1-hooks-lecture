import {useState} from 'react'

const Form = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return(
    <div>
      <h1>Form</h1>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={() => alert(`Username: ${username}, Password: ${password}`)}>Login</button>
    </div>
  )
}
export default Form