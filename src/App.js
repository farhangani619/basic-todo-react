import React from "react";

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      newTodo: "",
      todos: [
        {
          text: "Learn React",
          completed: false
        },
        {
          text: "Learn jsx",
          completed: false
        },
        {
          text: "Learn Props",
          completed: false
        }
      ]
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      newTodo: "",
      todos: [
        ...this.state.todos,
        {
          text: this.state.newTodo,
          completed: false
        }
      ]
    });
  }
  handleChange(event) {
    this.setState({ newTodo: event.target.value });
  }
  Toggle(event, index) {
    const todos = [...this.state.todos];
    todos[index] = {
      ...this.state.todos[index],
      completed: event.target.checked
    };
    this.setState({ todos });
  }
  removeTodo(event, index) {
    const todos = [...this.state.todos];
    todos.splice(index, 1);

    this.setState({
      todos
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="newTodo">New Todo</label>
          <br />
          <input
            onChange={this.handleChange.bind(this)}
            id="newTodo"
            name="newTodo"
            value={this.state.newTodo}
          />
          <button type="submit">Add Todo</button>
        </form>
        <ul>
          {this.state.todos.map((todo, index) => {
            return (
              <li
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  padding: "10px",
                  maxWidth: "250px"
                }}
              >
                <input
                  type="checkbox"
                  onChange={(event) => this.Toggle(event, index)}
                  checked={todo.completed}
                />
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "inherit"
                  }}
                >
                  {todo.text}
                </span>
                <button onClick={(event) => this.removeTodo(event, index)}>
                  Remove
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default function App() {
  return <TodoList />;
}
