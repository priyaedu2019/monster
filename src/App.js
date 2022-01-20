import React from 'react';
import './App.css';
import Searchbox from './components/searchbox/searchbox';
import Card from './components/card/card';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      monsters: [{
        name: 'Frankestein',
        id: 'asci'
      },{
        name: 'Dracula',
        id: 'asr2'
      },{
        name: 'Zombie',
        id: 'as1w'
      }],
      searchtext: ''
    } 
    this.onSearchChange = this.onSearchChange.bind(this)
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({
        monsters: users
      }))
  }

  onSearchChange(event) {
    const {value} = event.target
    this.setState({
      ...this.state,
      searchtext: value
    })
  }

  render(){
    const filteredMonsters = this.state.monsters.filter((monster) => {
        return monster.name.toLowerCase().includes(this.state.searchtext.toLowerCase())
    })
    console.log("rendered again", filteredMonsters)
    return (
      <div className="App">
        <header className="app-header">
          <h1>Monsters List</h1>
        </header>
        <div className="main">
            <Searchbox onSearchChange = {this.onSearchChange} ></Searchbox>
            <Card monsters= {filteredMonsters}></Card>
        </div>
        <div>
          <p> Making more changes here </p>
          <img src='/monster/images/Collaboration.PNG' alt="collab" />
        </div>
      </div>
    );
  }

}

export default App;
