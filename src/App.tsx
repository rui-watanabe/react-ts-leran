import React from 'react';
import TodoList from './components/TodoList';

// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

const App: React.FC = () => {
  const  todos = [{id: '1', text: 'typescript'}]
  return (
    <div className="App">
      <TodoList todos={ todos } />
    </div>
  );
}

export default App;
