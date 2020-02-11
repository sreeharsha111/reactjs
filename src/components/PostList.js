import React, { Component } from 'react';
import axios from 'axios'


class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             slot :[]
        }
    }
  /*  componentDidMount() {
        this.setState({isLoading: true});
    
        fetch('http://localhost:8080/slot/2')
          .then(response => response.json())
          .then(data => this.setState({groups: data, isLoading: false}));
      }*/
    
      async remove(id) {
        await fetch(`/slot/2685`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(() => {console.log("Deleted sucswishfw;kas");
          
        });
      }
    
    
    render() {
        return (
            <div>
                List of posts
                
            </div>
        )
    }
}

export default PostList
