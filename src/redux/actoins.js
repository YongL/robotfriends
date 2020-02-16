import {
        CHANGE_SEARCH_FIELD,
        REQUEST_ROBOTS_FAILED,
        REQUEST_ROBOTS_PENDING,
        REQUEST_ROBOTS_SUCCESS
    } from './constants';

export const changeSearchField = text => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});

// thunk middle work, for it (determine)/looking for the action return is a function
// instead of object, when the middle determine it is a func, it will give the thunk

// if wondering why the method has the dispatch argument inside
// because of the thunk, it handles the dispatch (context)
// similar to function(dispatch){ ///...} but thunk handle that... if wondering
export const requestRobots = () =>  (dispatch) => { // higher order function, function return another function
    console.log('here before error???')
    dispatch({ type: REQUEST_ROBOTS_PENDING});

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then( data => {
            dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data});
        })
        .catch(error => {
            dispatch({type: REQUEST_ROBOTS_FAILED, payload: error});
        })
    };
