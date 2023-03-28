import TodoWrapper from './components/TodoWrapper';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';
import FilterTodo from './components/FilterTodo';



function App() {
  return (
    <TodoWrapper>
      <CreateTodo />
      <TodoList />
      <FilterTodo />
    </TodoWrapper>
  );
}

export default App;
