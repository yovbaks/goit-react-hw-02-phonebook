
import TodoList from '../TodoList/TodoList';
import { Component } from 'react';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';


class Container extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Todo-1', completed: true },
      { id: 'id-2', text: 'Todo-2', completed: false },
      { id: 'id-3', text: 'Todo-3', completed: true },
      { id: 'id-4', text: 'Todo-4', completed: false },
    ],
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );
    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm />

          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
        <div>Total todos: {todos.length}</div>
        <div>Done todos: {completedTodos}</div>
        <h1>Состояние компонента</h1>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

export default Container;


