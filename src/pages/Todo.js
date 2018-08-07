import React, { Component } from 'react';
import '../App.css';
import Footer from '../components/Footer';

import AddTodo from './pageitems/AddTodo';
import TodoItem from './pageitems/TodoItem';

const todos = [{ content: 'remember to smile ;)'}
];

localStorage.setItem('todos', JSON.stringify(todos));

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: JSON.parse(localStorage.getItem('todos')),
    };

    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  componentWillMount () {
    const todos = this.getTodos();

    this.setState({ todos });
  }

  getTodos() {
    return this.state.todos;
  }

  onAdd (content) {
    const todos = this.getTodos();

    todos.push({
      content
    });

    this.setState({ todos });
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  onDelete(content, index) {
    const todos = this.getTodos();

    const filteredTodos = todos.filter(todo => {
      return todo.content !== content;
    });

    this.setState({
      todos: filteredTodos
    });

    localStorage.setItem('todos', JSON.stringify(todos));
  }

  onEditSubmit(content, originalContent) {
    let todos = this.getTodos();

  todos = todos.map(todo => {
    if (todo.content === originalContent) {
      todo.content = content;
    }

    return todo;
  });
  this.setState({ todos });
  localStorage.setItem('todos', JSON.stringify(todos));
}

  render() {
    return (
      <div>
        <h2>Todos</h2>
        <div className="todos">
          <AddTodo
            onAdd={this.onAdd}
          />

          {
            this.state.todos.map((todo, index) => {
              return (
                <TodoItem
                  key={todo.index}
                  {...todo}
                  onDelete={this.onDelete}
                  onEditSubmit={this.onEditSubmit}
                  />
              );
            })
          }
        </div>
          <br /><br /><br /><br /><br /><br /><br />
          <Footer />
      </div>
    );
  }
}

export default Todo;
