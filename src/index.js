import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/todo-list';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';

const App = () => {

  const todoList = [
    {label: 'Drink coffee', important: false, id: 1},
    {label: 'Build awesome app', important: true, id: 2},
    {label: 'Make a lunch', important: false, id: 3},
    {label: 'Continue build awesome app', important: false, id: 4},
  ];

  return (
    <div>
    <AppHeader />
    <SearchPanel />
    <TodoList todos = {todoList} />
  </div>
  );
}; 


ReactDOM.render(<App />,
   document.getElementById('root'));  

