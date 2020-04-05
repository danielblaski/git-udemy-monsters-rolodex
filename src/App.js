import React, { Component } from 'react';

import { CardList } from './components/card_list/card_list.component';
import { SearchBox } from './components/searchbox/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }

  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) //here json is being created for JS to understand
    .then(users => this.setState( { monsters: users })); //here elements from json are being added to monsters array
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value})
  }

  render() {
    const { monsters, searchField } = this.state;
    /* equivalent to saying like
    const monsters = this.state.monsters;
    const searchField = this.state.searchField;
    */
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

const e = function e() {
  return e.target.value
}

export default App;
