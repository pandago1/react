import React, {Component} from 'react';

import {increment, decement, reset} from 'actions/counter';

import {connect} from 'react-redux';
class Page2 extends Component {
	render() {
		return (
			<div onClick={(event) => console.log(event)}>
				this is Page2~
				{ this.props.counter.count}
			</div>
		)
	}
}

const mapStateToProps	= (state) => {
	return {
		counter: state.counter
	}
};

export default connect(mapStateToProps)(Page2);
