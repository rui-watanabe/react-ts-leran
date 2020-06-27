import React from 'react';

interface TodoListProps {
  todos: {id: string, text: string}[];
  onDeleteTodo: (todoId: string) => void;
}

const TodoList: React.FC<TodoListProps> = props => {
  return(
    <ul>
      { props.todos.map(todo => (
        <li key={ todo.id }>
          <span>{ todo.text }</span>
          <button onClick={ props.onDeleteTodo.bind(null, todo.id) }>Delete</button>
        </li>
      ))}
      <span>{ }</span>
    </ul>
  )
};

export default TodoList;