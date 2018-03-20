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
<<<<<<< HEAD
			<footer id="foot" >
				<ul>
					{this.arr.map((pathName, index) => {
						return (<li 
								ref={ 'name' + pathName} 
								key={pathName} 
								className={ this.props.nav.pathName === pathName || this.props.nav.pathName == 'home' && !index ? 'active' : '' }
								
								/*onClick={ this.slideLi.bind(this, pathName)}*/
								onClick={ (e) => {
										this.props.path();
										console.log(this.props.nav);
										//this.slideLi( e, 'name' + pathName)
									}
								}
							>
								<Link to={ '/' + pathName  }>{ pathName !== '' ? pathName : 'home' }</Link>
							</li>);
					})}
				</ul>
			</footer>
=======
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page1">Page1</Link></li>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/userinfo">UserInfo</Link></li>
            </ul>
>>>>>>> 55651ac24f14c62d74a48f71ce0a3d43416ddec0
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
