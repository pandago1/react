import React from 'react';

import {Route, Switch} from 'react-router-dom';

import Bundle from './Bundle';
import Loading from 'components/Loading/Loading';

import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
import Page1 from 'bundle-loader?lazy&name=page1!pages/Page1/Page1';
import Page2 from 'bundle-loader?lazy&name=page2!pages/Page2/Page2';
import Counter from 'bundle-loader?lazy&name=counter!pages/Counter/Counter';
import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo';
import Test from 'bundle-loader?lazy&name=userInfo!pages/Test/Test';
import NotFound from 'bundle-loader?lazy&name=notFound!pages/NotFound/NotFound';

const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} /> : <Loading/>
        }
    </Bundle>
);

export default () => (
	<div>
		<Switch>
			<Route exact path="/" component={createComponent(Home, 1)}/>
			<Route path="/page1" component={createComponent(Page1)}/>
			<Route path="/page2" component={createComponent(Page2)}/>
			<Route path="/counter" component={createComponent(Counter)}/>
			<Route path="/userinfo" component={createComponent(UserInfo)}/>
			<Route path="/test" component={createComponent(Test)}/>
            <Route component={createComponent(NotFound)}/>
		</Switch>
	</div>
);





