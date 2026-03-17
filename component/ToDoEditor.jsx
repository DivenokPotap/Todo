import React, { Component } from "react";
import './ToDoEditor.css'

class ToDoEditor extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      isCompleted: false
    };
  };

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    });
  };

  handleCheckBoxChange = (event) => {
    this.setState({
      isCompleted: event.target.checked
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      name: "",
      isCompleted: false
    });
  };

  render() {
    const { name, isCompleted } = this.state;

    return (
      <div className="TaskEditor">
        <form onSubmit={this.handleSubmit}>
          <h2>Завдання</h2>

          <div className="inputs"><input className="NameINPT"
            type="text"
            name="name"
            value={name}
            placeholder="Введіть Завдання"
            onChange={this.handleChange}
          />

          <label>
            <input className="CheckBox"
              type="checkbox"
              checked={isCompleted}
              onChange={this.handleCheckBoxChange}
            />
            <p className="Done">Виконано?</p>
          </label></div>

          <br /><br />

          <button type="submit" className="Submit">Додати завдання</button>
        </form>
      </div>
    );
  }
}

export default ToDoEditor;