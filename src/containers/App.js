import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardList } from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from './ErrorBoundry';
import './app.css'

import { setSearchField } from '../actions';

const mapStateToProps = (state) => {
  console.log(state)
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value.toLowerCase()))
  };
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
    }
  }

  async componentDidMount() {
    console.log(this.props)
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    this.setState({ robots: users });
  }

  filteredRobots = () => {
    return this.state.robots.filter(({ name }) => name.toLowerCase().includes(this.props.searchField));
  }

  render() {
    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox onSearchChange={this.props.onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
            <CardList robots={this.filteredRobots()}/>
          </ErrorBoundry>
        </Scroll>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);