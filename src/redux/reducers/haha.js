import {GET_HAHA_REQUEST, GET_HAHA_SUCCESS, GET_HAHA_FAIL} from 'actions/haha';

const initState = {
    isLoading: false,
    haha: {},
    errorMsg: ''
};

export default function reducer(state = initState, action) {
	switch(action.type) {
		case GET_HAHA_REQUEST:
			return {
				 ...state,
                isLoading: true,
                haha: {},
                errorMsg: ''
			}
		case GET_HAHA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                haha: action.result.data,
                errorMsg: ''
            };
        case GET_HAHA_FAIL:
            return {
                ...state,
                isLoading: false,
                haha: {},
                errorMsg: '请求错误'
            };
        default:
            return state;
	}
}
