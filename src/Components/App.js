import React, {Component} from 'react';
import Home from './Home/Home';
import About from './About/About';
import Main from '../Main';
import Header from './Common/Header';



class App extends Component {
  render(){
    return(
      <div className="container-fluid">
      <p><Header/></p>
        <Main />
      </div>
    )
  }
}

export default App;
