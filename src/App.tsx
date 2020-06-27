import React from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

const App: React.FC = () => {
  const todos = [{id: '1', text: 'typescript'}]
  const todoAddHandler = (text: string) => {
    console.log(text);
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={ todoAddHandler } />
      <TodoList todos={ todos } />
    </div>
  );
}

export default App;
