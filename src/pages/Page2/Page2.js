import React, {Component} from 'react';


export default class Page2 extends Component {
	render() {
		return (
			<div onClick={(event) => console.log(event)}>
				this is Page2~
			</div>
		)
	}
}
