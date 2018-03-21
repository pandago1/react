import 'antd-mobile/dist/antd-mobile.css';
import './css/common.sass';
import './css/page.sass';
import './css/footer.sass';
import './css/base.scss';
import './css/fonts.css';

import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from './redux/store';
import {HashRouter as Router} from 'react-router-dom';
// BrowserRouter TODO 以上上node的时候启用
import App from 'components/App/App';

//import getRouter from 'router/router';

/*初始化*/
renderWithHotReload(App);

/*热更新*/
if (module.hot) {
    module.hot.accept('components/App/App', () => {
        const NextApp = require('components/App/App').default;
        renderWithHotReload(NextApp);
    });
}

function renderWithHotReload(RootElement) {
    ReactDom.render(
        <AppContainer>
			<Provider store={store}>
                <Router>
                    <RootElement/>
                </Router>
			</Provider>
        </AppContainer>,
        document.getElementById('app')
    )
}
