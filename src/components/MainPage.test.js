import { shallow } from 'enzyme';
import React from 'react'; // import this because it is jsx
import MainPage from './MainPage';

describe('test main page', () => {

    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    };
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<MainPage {...mockProps}/>);
    });

    it('render main page', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('filter robots correctly', () => {
        expect(wrapper.instance().filterRobots([])).toEqual([]);
    });
})

// jest do snaphot testing, which snapshot the codes (string copy not image)

