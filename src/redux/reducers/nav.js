import { PATH } from 'actions/nav';

const initState	= {
	pathName: 'home'
}

export default function reducer(state	= initState, action) {
	switch(action.type) {
		case PATH:
			return {
				pathName: action.pathName
			};
		default:
			return {
				pathName: 'home'
			}
	}
}
