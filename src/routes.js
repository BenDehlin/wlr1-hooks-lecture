import {Switch, Route} from 'react-router-dom'
import Counter from './components/Counter'
import Form from './components/Form'
import List from './components/List'
import Dash from './components/Dash'
import Pokemon from './components/Pokemon'

export default (
  <Switch>
    <Route exact path='/' component={Dash} />
    <Route path='/form' component={Form} />
    <Route path='/list' component={List} />
    <Route path='/counter' component={Counter} />
    <Route path='/pokemon/:name' component={Pokemon} />
  </Switch>
)