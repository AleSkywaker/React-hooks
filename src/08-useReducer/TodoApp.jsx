import { useTodo } from '../hooks/useTodo';
import { TodoList, TodoAdd } from './components';

export const TodoApp = () => {
  const { todos, pendingTodos, allTodos, handleAddTodo, handleDeleteTodo, handleToggleTodo } =
    useTodo();
  return (
    <>
      <h3>
        Use Reducer - Todo App total tareas: {allTodos} pendientes: {pendingTodos}
      </h3>
      <div className='row mt-3 mb-5'>
        <div className='col-7'>
          <h5>TodoApp</h5>
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
        </div>
        <div className='col-5'>
          <h5>Add todo</h5>
          <TodoAdd onAddTodo={handleAddTodo} />
        </div>
      </div>
    </>
  );
};
