/* libs */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './i18n/index.i18n';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import viVN from 'antd/es/locale/vi_VN';
import 'antd/dist/antd.css';
/* apps */
import App from './app/App';
import './assets/styles/index.scss';
import configureStore from './app/redux/index';
import TopBottomLayout from './app/layouts/topbottom.layout';
import LeftRightLayout from './app/layouts/leftright.layout';
import * as serviceWorker from './serviceWorker';
const store = configureStore();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ConfigProvider locale={viVN}>
          <App>
            <h1 style={{ textAlign: 'center' }}>Top Bottom Layout Structure</h1>
            <TopBottomLayout />
            <h1 style={{ textAlign: 'center' }}>Left Right Layout Structure</h1>
            <LeftRightLayout />
          </App>
        </ConfigProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
