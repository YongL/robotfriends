import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
   } from './constants';

   import * as reducers from './reducers';
   const initState = {
       searchField: ''
   };
   describe('searchRobots', () => {
       it('should return the inital state', () => {
        expect(reducers.searchRobots(undefined, {}))
        .toEqual(initState);
       });

       it.only('should handle CHANGE_SEARCHFIELD', () => {
           expect(reducers.searchRobots(initState, {
               type: CHANGE_SEARCH_FIELD,
               payload: 'abc'
           })).toEqual({
               searchField: 'abc'
            });
       })
   });