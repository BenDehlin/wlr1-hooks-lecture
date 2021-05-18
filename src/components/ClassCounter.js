import {Component} from 'react'

class ClassCounter extends Component{
  constructor(){
    super()
    this.state = {
      count: 0
    }
  }

  render(){
    return(
      <div>
      <h1>Counter</h1>
      <h2>{this.state.count}</h2>
      <button onClick={() => this.setState({count: this.state.count -1 })}>-</button>
    </div>
    )
  }
}

export default ClassCounter