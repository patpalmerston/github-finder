import React, { Component } from 'react'; // instead of using React.Component for class component you add the this to the import
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get('https://api.github.com/users');

    this.setState({ users: res.data, loading: false });
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
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
