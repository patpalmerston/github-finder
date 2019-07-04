import React, { Component } from 'react'; // instead of using React.Component for class component you add the this to the import
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  };
  // you can keep this initial user request to show up before the search. The default first 30. But it adds no functionality to the search itself.

  // async componentDidMount() {
  //   // console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);

  //   this.setState({ loading: true });

  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${
  //       process.env.REACT_APP_GITHUB_CLIENT_ID
  //     }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   this.setState({ users: res.data, loading: false });
  // }

  // the actual method that searches github users
  searchUsers = async text => {
    // console.log(text);
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
  };

  // clear users from state
  clearUsers = () => this.setState({ users: [], loading: false });

  // Set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });

    setTimeout(() => this.setState({ alert: null }), 1000);
  };

  render() {
    const { users, loading } = this.state;
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={loading} users={users} />
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
