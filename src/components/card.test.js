import { shallow } from 'enzyme';
// import { shallow, mount, render, configure } from 'enzyme';
import React from 'react'; // import this because it is jsx
import Card from './card';


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


it('render Card', () => expect(shallow(<Card />)).toMatchSnapshot());

// jest do snaphot testing, which snapshot the codes (string copy not image)

