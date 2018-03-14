import {increment, decrement, reset} from 'actions/counter';

const mapDispatchToProps	= (dispatch) => {
    return {
        increment: () => {
            dispatch(increment())
        },
        decrement: () => {
            dispatch(decrement())
        },
        reset: () => {
            dispatch(reset())
        }
    }
};

export {mapDispatchToProps};
