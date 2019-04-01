import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';
import PostList from './components/PostList';
import PostCreate from './components/PostCreate';
import PostDetail from './components/PostDetail';

import './style/style.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/posts/:id" component={PostDetail} />
                    <Route path="/posts/new" component={PostCreate} />
                    <Route path="/"          component={PostList} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);
