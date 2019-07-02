import React, { Component } from 'react'; // instead of using React.Component for class component you add the this to the import
import Navbar from './components/layout/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
      </div>
    ); // We removed the props and used static default props on the Navbar component instead. Any props made here will override the static default props <Navbar title='Whatever' icon='fab fa-github' />
  }
}

export default App;
// Look up fragments
// look up using the snippets
//with out jsx using just vanilla JS
/*
render() {
  return React.createElement(
    'div',
    {className: 'App'},
    Rect.creatElement('h1', null, 'Hello from React')
    );
}
*/
