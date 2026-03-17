import './App.css'
import React, { Component } from "react";
import ToDoEditor from './component/ToDoEditor';
import todos from './data/todo.json';

class App extends Component {

  state = {
    todos: todos
  };

  addTodo = (data) => {

    const newTodo = {
      id: Date.now().toString(),
      text: data.name,
      completed: data.isCompleted
    };

    this.setState(prevState => ({
      todos: [...prevState.todos, newTodo]
    }));
  };


  componentDidMount(){
    const saveTodos = localStorage.getItem('todos');
    if(saveTodos){
      this.setState({ todos: (JSON.parse(saveTodos))});
    }
  };
  
  componentDidUpdate(prevState) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

  DeleteTask = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id)
    }));
  };

  render(){

    const { todos } = this.state;

    return (
      <div className='BackgrounD'>

        <ToDoEditor addTodo={this.addTodo} />

        <h2>Список завдань</h2>

        <ul className='Task'>
        {todos.map(todo => (
            <li key={todo.id}>
              {todo.text} <label className="check">{todo.completed ? "Так" : "Ні"}</label> <button className='Delete' onClick={() => this.DeleteTask(todo.id)}>Видалити</button>
            </li>
          ))}
        </ul>

      </div>
    )
  }
}

export default App