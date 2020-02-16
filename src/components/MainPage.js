import React, { Component } from 'react';

import CardList from './cardList'
import Searchbox from './searchbox';
import Scroll from './scroll';
import './MainPage.css';
import ErrorBoundary from './errorBoundary';
import Header from './header';


class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = (robots, searchField) =>
    robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

  render() {
    const { robots, searchField, onSearchChange, isPending } = this.props;
    // const filteredRobots = robots.filter(robot => {
    //   return robot.name.toLowerCase().includes(searchField.toLowerCase());
    // })
    return (
      <div className='tc'>
        <Header />
        <Searchbox searchChange={onSearchChange}/>
        <Scroll>
          { isPending ? <h1>Loading</h1> :
            <ErrorBoundary>
              <CardList robots={this.filterRobots(robots, searchField)} />
            </ErrorBoundary>
          }
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
