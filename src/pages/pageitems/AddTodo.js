import React, { Component } from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.onAdd(this.contentInput.value);

    this.contentInput.value = '';
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h4>Add a Todo</h4>
        <input placeholder="Type a Todo" ref={contentInput => this.contentInput = contentInput} /> <br />
        <button>Add</button>

        <hr />
      </form>
    );
  }
}

export default AddTodo;
