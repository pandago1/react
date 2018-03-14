import React, {Component} from 'react';
import {connect} from 'react-redux';

import {mapDispatchToProps} from 'components/common/common';

class Test extends Component {
	render() {
		return (
			<div>
				{this.props.all.counter.count}
                <button onClick={() => this.props.increment()}>自增
                </button>
                <button onClick={() => this.props.decrement()}>自减
                </button>
                <button onClick={() => this.props.reset()}>重置
                </button>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
    return {
        all: state
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
