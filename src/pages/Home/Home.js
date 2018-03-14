import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './home.sass';

export default class Home extends Component {
    constructor(props, l) {
        super(props);
        this.state = {
            count: 0
        }
		var i = 0;
		console.log(this.timer	= null, this);
		this.timer	= setInterval(() => {
			console.log(i++);
			this.setState({
				count: ++this.state.count
			});
		}, 1000)
    }

    _handleClick() {
        this.setState({
            count: ++this.state.count
        });
    }
	componentWillUnmount() {
		console.log('distoy');
		clearInterval(this.timer)
	}
    render() {
        return (
            <div>
                this is home~11<br/>
                当前计数：{this.state.count}<br/>
                <button onClick={() => this._handleClick()}>自增</button>
				<div className="jump" onClick={ this.jump.bind(this) }><Link to="/page1">点一下</Link></div>
            </div>
        )
    }
	jump() {
		console.log(this);
	}
}
