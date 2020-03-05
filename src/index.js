import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk' // middleware
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'
import MuiThemeProvide from 'material-ui/styles/MuiThemeProvider'

import './index.css';
import reducer from './reducers'
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import EventsShow from './components/events_show';
import * as serviceWorker from './serviceWorker';

const enhancer = process.env.NODE_ENV === 'development' ?
  composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk);
const store = createStore(reducer, enhancer)

ReactDOM.render(
  <MuiThemeProvide>
    <Provider store={ store }>
      <BrowserRouter>
        <Switch>
          {/* exactはpathに完全に一致する場合という条件をつける */}
          <Route exact path="/events/new" component={EventsNew} />
          <Route exact path="/events/:id" component={EventsShow} />
          <Route exact path="/events/" component={EventsIndex} />
          <Route exact path="/" component={EventsIndex} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvide>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
