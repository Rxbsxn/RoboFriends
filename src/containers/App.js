import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardList } from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import ErrorBoundry from './ErrorBoundry';
import './app.css'

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = (state) => {
  console.log(state)
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value.toLowerCase())),
    onRequestRobots: () => requestRobots(dispatch)
  };
}

class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  filteredRobots = () => {
    return this.props.robots.filter(({ name }) => name.toLowerCase().includes(this.props.searchField));
  }

  render() {
    return (
      <div className='tc'>
        <Header />
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