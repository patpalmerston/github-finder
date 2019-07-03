import React, { Component } from 'react';

class Search extends Component {
  state = {
    text: ''
  };

  onSubmit = e => {
    e.preventDefault();
    // console.log(this.state.text);
    this.props.searchUsers(this.state.text); //sends the form info to the main app component. Then feeds the text content as a prop to Search.js. From there make the method that called  searchUsers using the text from this input to search against.
    this.setState({ text: '' });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
      </div>
    );
  }
}

export default Search;
