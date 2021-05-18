import { Component } from "react"

class ClassForm extends Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: "",
    }
  }

  handleUsername = (e) => {
    this.setState({ username: e.target.value })
  }

  handlePassword = (e) => {
    this.setState({ password: e.target.value })
  }

  render() {
    return (
      <div>
        <h1>Form</h1>
        <input value={this.state.username} onChange={this.handleUsername} />
        <input
          type="password"
          value={this.state.password}
          onChange={this.handlePassword}
        />
        <button
          onClick={() =>
            alert(
              `Username: ${this.state.username}, Password: ${this.state.password}`
            )
          }
        >
          Login
        </button>
      </div>
    )
  }
}

export default ClassForm
