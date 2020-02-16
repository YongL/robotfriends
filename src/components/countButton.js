import React, {PureComponent} from 'react';
// use React PurComponent if only want to update when the props changed
// use shouldUpdateComponent with causion for it might cause some unwanted logic
class CountButton extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.state.count !== nextState.count) {
    //         return true;
    //     } else {return false}
    // }

    updateCount = () => {
        // this.setState({count: this.state.count + 1});
        // to handle async update state react use
        this.setState(state => ({count: state.count + 1}))
    };

    updateCountTo3 = () => {
        this.setState(state => ({count: 3}));
    }

    render() {
        console.log('CountButton', this.props.color);
        return (
            <div>
                <button color={this.props.color} id="counter" className='f1' onClick={this.updateCount}>{this.state.count}</button>
                <button className='f1' onClick={this.updateCountTo3}>update to 3</button>
            </div>
        );
    }
}

export default CountButton;