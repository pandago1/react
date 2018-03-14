import React, {Component} from 'react';
import './Page1.sass';
import image from './images/n.png';

export default class Page1 extends Component {
	render() {
		return (
			<div className="page-box">
				this is Page1~
                <img src={image}/>
			</div>
		)
	}
}
