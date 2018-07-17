import React, { Component } from 'react';
import { CardList } from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from './ErrorBoundry';
import './app.css'
export class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      searchField: ''
    }
  }

  async componentDidMount() {
    console.log(this.props.store);
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    this.setState({ robots: users });
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
        <Scroll>
          <ErrorBoundry>
            <CardList robots={this.filteredRobots()}/>
          </ErrorBoundry>
        </Scroll>
      </div>
    )
  }
}