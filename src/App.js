// App.js
import React from 'react';
import CardList from './card-list';
import './style.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>Card Design</h1>
        <CardList />
      </div>
    );
  }
}

export default App;
