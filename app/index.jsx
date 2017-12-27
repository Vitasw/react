import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

//import App from './components/App.jsx';
import store from './store/store';
import IndexPage from "./components/IndexPage.jsx";
import PostPage from "./components/PostPage.jsx";


ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={IndexPage}/>
                <Route path="/post/:id" component={PostPage}/>
            </Switch>
        </HashRouter>
    </Provider>,
    document.getElementById('app')
);