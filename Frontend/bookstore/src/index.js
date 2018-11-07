import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import BookDetails from './BookDetails';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>
      <Route path="/BookStore" component={App} />
      <Route path="/BookDetails" component={BookDetails} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

serviceWorker.unregister();
