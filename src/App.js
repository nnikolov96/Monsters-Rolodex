import React, { Component } from 'react';
import './App.css';
import { SearchBox } from './components/search-box/searchbox.component';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {

  constructor() { 
    super();
    this.state = { 
      monsters: [],
      searchField: ''
    };
  }

  handleChange = (e) => { 
    console.log('mqu');
    this.setState({
      searchField: e.target.value
    })
  }

  componentDidMount() { 
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render() { 
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())  
    );
    return (
      <div className = 'App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox handleChange= {this.handleChange} placeholder = {'Search Monsters'} />
        <CardList monsters = { filteredMonsters  } />
      </div>
    );
  }

}

export default App;
