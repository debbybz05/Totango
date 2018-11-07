import React, { Component } from 'react';
import './App.css';
import  BooksList from './BooksList.js';

class App extends Component {
  constructor () {
    super();
  }

  render() {
    return (
      <div>
        <BooksList/>
      </div>
    );
  }
}

export default App;













