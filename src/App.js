import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      friends: [],
      name: '',
      picture: ''
    }
  }
  click(){
      var newFriend = {
        name: this.state.name,
        picture: this.state.picture,
      }
      this.setState({
        friends: [...this.state.friends, newFriend],
        name: '',
        picture: ''
      });
  }
  render() {

    let list = this.state.friends.map((friend, index) => {
      return (
        <div key={index}>
          <p>{friend.name}</p>
          <img src={friend.picture} alt="" height="100"/>
        </div>
      )
    });

    return (
      <div className="App">
        <h1>This is My React Mini App</h1>
        <h3>Add a friend's name and picture to you list of friends</h3>
        <label>Name:</label>
        <input onChange={(e) => this.setState({name: e.target.value})}/>
        <label>Picture:</label>
        <input onChange={(e) => this.setState({picture: e.target.value})}/>
        <button onClick={() => this.click()}>Add Friend</button>
        {list}
      </div>
    );
  }
}

export default App;
