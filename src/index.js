// Provider提供store环境，store是数据（基础共享数据和函数处理方式reducer的集合），Router提供路由，connect将store的值放到props上，组件能够访问，withRouter防止store的数据变化的时候某些组件不会更新
// withRouter必须是顶层
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Connect from './redux/connect';
import App from './App';
import { cartaddToCart } from "./redux/action/cart-action";
import { ConnectedRouter } from 'react-router-redux';
import store from './redux/store';
import { Provider } from 'react-redux';
// Router要类似vue的全局注册
import { HashRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
console.log(store.getState());
store.dispatch(cartaddToCart('Coffee 500gm', 1, 250));
console.log(store.getState());

ReactDOM.render(<div>
    <Provider store={store}>
        {/* <Connect></Connect> */}
        <Router>
            <App></App>
            {/* <Connect></Connect> */}
        </Router>
    </Provider>
</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
