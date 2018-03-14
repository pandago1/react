import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
	constructor(props) {
		super(props);
		this.state	= {liked: false};
		this.arr	= ['', 'page1', 'page2', 'counter', 'userinfo', 'test']
	}
    render() {
		const test	= this.state.liked ? 'red' : 'blue';
		const initPath	= location.pathname.replace(/\//, '');
		console.log(initPath);
        return (
			<footer id="foot" className={test}>
				<ul>
					{this.arr.map((pathName, index) => {
						return (<li 
								ref={ 'name' + pathName} 
								key={pathName} 
								className={ initPath === pathName ? 'active' : '' }
								/*onClick={ this.slideLi.bind(this, pathName)}*/
								onClick={ (e) => this.slideLi( e, 'name' + pathName)}
							>
								<Link to={ '/' + pathName  }>{ pathName !== '' ? pathName : 'home' }</Link>
							</li>);
					})}
				</ul>
			</footer>
        )
    }
	slideLi(e, name) {
		//let el	= findDOMNode(this);
		for (var i in this.refs) {
			this.refs[i].className	= ''
		};
		this.refs[name].className	= 'active';
		//console.log(el.getElementsByTagName('li'));
		//this.refs[name].className = 'active';
		//this.refs.home.className	= 'active';
		//this.setState({liked: !this.state.liked });
	}
}


