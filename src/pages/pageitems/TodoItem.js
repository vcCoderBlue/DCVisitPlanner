import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false
    };

    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  onDelete() {
    const { onDelete, content } = this.props;

    onDelete(content);
  }

  onEdit() {
      this.setState({ isEdit: true });
  }

  onEditSubmit(event) {
      event.preventDefault();

      this.props.onEditSubmit(this.contentInput.value, this.props.content);

      this.setState({ isEdit: false });
  }

  render() {
    const { content } = this.props;

    return (
      <div>
        {
          this.state.isEdit
            ? (
              <form onSubmit={this.onEditSubmit}>
                <input placeholder="Todo" ref={contentInput => this.contentInput = contentInput} defaultValue={content} />
                <br />
                <button>Save</button>
              </form>
            )
            : (
              <div>
                <p>{content}</p>

                <button onClick={this.onEdit}>Edit</button>
                {' | '}
                <button onClick={this.onDelete}>Delete</button>
              </div>
            )
        }
      </div>
    );
  }
}

export default TodoItem;
