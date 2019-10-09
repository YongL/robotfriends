import React, {Component} from 'react';
// use React PurComponent if only want to update when the props changed
// use shouldUpdateComponent with causion for it might cause some unwanted logic

import CounterButton from './countButton';
class Header extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    render() {
        console.log('header');
        return (
            <div>
                <h1 className='f1'>RoboFriends</h1>
                <CounterButton color={'red'}/>
            </div>
        );
    }
}

export default Header;