import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
  render(){
    return(
      <div className="jumbotron">
        <h1>Pl Administration</h1>
        <p> React, Redux and React Router</p>
        <Link to="/about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    )
  }
}


export default Home;
