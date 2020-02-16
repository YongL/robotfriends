import { shallow } from 'enzyme';
// import { shallow, mount, render, configure } from 'enzyme';
import React from 'react'; // import this because it is jsx
import CardList from './cardList';


// import Adapter from 'enzyme-adapter-react-16';

// configure({adapter: new Adapter()});

// the test script come with react script /// create-react-app 


// shallow only shollow or render one give component it doesn't care anything inside or children
// inside it
// the document doesn't really give a specific direction of where to 
// to put the configure// 
// under src create setupTests.js 
// https://airbnb.io/enzyme/docs/installation/index.html


// it('render Card', () => expect(shallow(<Card />).length).toBe(1));
const robots = [{
    id: 1,
    name: 'some name',
    email: 'some@email.com'
}];


it('render Card', () => expect(shallow(<CardList robots={robots}/>)).toMatchSnapshot());

describe('display props', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CardList robots={robots}/>);
    });

    it('has props', () => {
        expect(wrapper.props().name).toEqual(robots.name);
    })
})

// jest do snaphot testing, which snapshot the codes (string copy not image)

