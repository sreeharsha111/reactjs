import React, { Component } from 'react';
import PostList from './components/PostList';
//import axios from 'axois';
//import { render } from 'react-dom';
import "./App.css"
import Axios from 'axios';


class App extends Component{
     remove() {
         fetch(`/slot/2685`, {
             method: 'DELETE',
          headers: {
              'Access-Control-Allow-Origin': 'http://localhost:8080',
              'Access-Control-Allow-Headers': 'GET, PUT , POST, DELETE',
           'Accept': 'application/json',
           'Content-Type': 'application/json'
          }
        }).then(() => {console.log("Deleted successfully");
          
        });
      }
  render() {
      return (
          <div>
<button onClick = {this.remove}>DELETE</button>              
          </div>
      )
  }
}

export default App;
