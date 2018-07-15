import React, { Component } from 'react';
import { CardList } from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './app.css'
export class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: robots,
      searchField: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value.toLowerCase() });
    
  }

  filteredRobots = () => {
    return this.state.robots.filter(({ name }) => name.toLowerCase().includes(this.state.searchField));
  }

  render() {
    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox onSearchChange={this.onSearchChange}/>
        <CardList robots={this.filteredRobots()}/>
      </div>
    )
  }
}