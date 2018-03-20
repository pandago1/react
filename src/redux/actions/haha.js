export const GET_HAHA_REQUEST	= "userInfo/GET_HAHA_REQUEST";
export const GET_HAHA_SUCCESS	= "userInfo/GET_HAHA_SUCCESS";
export const GET_HAHA_FAIL		= "userInfo/GET_HAHA_FAIL";


function getHahaRequest() {
	return {
		type: GET_HAHA_REQUEST
	}
}

function getHahaSuccess(haha) {
	return {
		type: GET_HAHA_SUCCESS
	}
}

function getHahaFail() {
	return {
		type: GET_HAHA_FAIL
	}
}

export function getHaha() {
	return {
		types: [GET_HAHA_REQUEST, GET_HAHA_SUCCESS, GET_HAHA_FAIL],
		promise: client => client.get(`${ location.origin }/api/a.json`)
	}
}
