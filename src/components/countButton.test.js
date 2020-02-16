import { shallow } from 'enzyme';
// import { shallow, mount, render, configure } from 'enzyme';
import React from 'react'; // import this because it is jsx
import CountButton from './countButton';


// import Adapter from 'enzyme-adapter-react-16';

// configure({adapter: new Adapter()});

// the test script come with react script /// create-react-app 


// shallow only shollow or render one give component it doesn't care anything inside or children
// inside it
// the document doesn't really give a specific direction of where to 
// to put the configure// 
// under src create setupTests.js 
// https://airbnb.io/enzyme/docs/installation/index.html
const color = 'red';
it('render CountButton', () => expect(shallow(<CountButton />).length).toBe(1));

it('snapshots CountButton', () => expect(shallow(<CountButton color={color}/>)).toMatchSnapshot());

describe('correctly increment counter', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CountButton color={color}/>);
    });

    it('increment', () => {
        wrapper.find('[id="counter"]').simulate('click');
        expect(wrapper.state()).toEqual({count: 1});
    })

    it('has red color', () => {
        expect(wrapper.instance().props.color).toBe('red');
    });

    // https://airbnb.io/enzyme/docs/api/ShallowWrapper/props.html
    // check instance when use new enzym
})

// jest do snaphot testing, which snapshot the codes (string copy not image)

