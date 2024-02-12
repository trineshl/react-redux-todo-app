import { Provider } from 'react-redux';
import { reduxAppStore } from './redux/reduxAppStore';
import AddTodo from './components/AddTodo';
import ViewTodos from './components/ViewTodos';

function App() {
  return (
    <Provider store={reduxAppStore}>
      <div style={{ margin: '10px' }}>
        <h1>Todo App</h1>

        <AddTodo />
        <ViewTodos />
      </div>
    </Provider>
  );
}

export default App;
