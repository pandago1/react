import {combineReducers} from "redux";

import counter from 'reducers/counter';
import userInfo from 'reducers/userInfo';
import nav from 'reducers/nav';
import haha from 'reducers/haha';

export default combineReducers({
    counter,
    userInfo,
	nav,
	haha
});

//export default function combineReducers(state = {}, action) {
//    return {
//        counter: counter(state.counter, action),
//		userInfo: userInfo(state.userInfo, action)
//    }
//}
