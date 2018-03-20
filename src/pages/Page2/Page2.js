import React, {Component} from 'react';
import {connect} from 'react-redux';
import {increment, decement, reset} from 'actions/counter';

import { Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'

const	style	= {
	width: '1rem'
}

class Page2 extends Component {
	render() {
		return (
			<div onClick={(event) => console.log(event)}>
				this is Page2~
				{ this.props.counter.count}
				<Button type="primary" style={style}>Start</Button>
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
