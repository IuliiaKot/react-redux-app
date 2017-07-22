import React  from 'react';
// import {Route, IndexRoute} from 'react-router';
import { Switch, Route } from 'react-router-dom';
import App from './Components/App';
import Home from './Components/Home/Home';
import About from './Components/About/About';


class Main extends React.Component {
  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/about' component={About}/>
          <Route path='/home' component={Home}/>
        </Switch>
      </div>
    )
  }
}


export default Main;
