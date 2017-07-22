import React  from 'react';
// import {Route, IndexRoute} from 'react-router';
import { Switch, Route } from 'react-router-dom';
import App from './Components/App';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Courses from './Components/Course/Courses';


class Main extends React.Component {
  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/courses' component={Courses}/>
          <Route path='/about' component={About}/>
        </Switch>
      </div>
    )
  }
}


export default Main;
