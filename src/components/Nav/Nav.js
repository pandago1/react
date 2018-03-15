import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { path } from 'actions/nav';

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state	= {liked: false};
		this.arr	= ['', 'page1', 'page2', 'counter', 'userinfo', 'test'];
	}
    render() {
        return (
			<footer id="foot" >
				<ul>
					{this.arr.map((pathName, index) => {
						return (<li 
								ref={ 'name' + pathName} 
								key={pathName} 
								className={ this.props.nav.pathName === pathName || this.props.nav.pathName == 'home' && !index ? 'active' : '' }
								
								/*onClick={ this.slideLi.bind(this, pathName)}*/
								onClick={ (e) => {
										this.props.path()
										//this.slideLi( e, 'name' + pathName)
									}
								}
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

const mapStateToProps	= (state) => {
	return {
		nav: state.nav
	}
};

const mapDispatchToProps	= (dispatch) => {
	return {
		path: () => {
			dispatch(path());
		}
	}
};


export default connect(mapStateToProps, mapDispatchToProps)(Nav);
