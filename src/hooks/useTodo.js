import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const initialState = [];

const initArgs = () => {
  return JSON.parse(localStorage.getItem('todos') || []);
};

export const useTodo = () => {

  const [todos, dispatchTodoAction] = useReducer(todoReducer, initialState, initArgs);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos) || []);
  }, [todos]);

  const handleAddTodo = (newTodo) => {
    const action = {
      type: 'Add Todo',
      payload: newTodo,
    };
    dispatchTodoAction(action);
  };

  const handleDeleteTodo = (id) => {
    dispatchTodoAction({
      type: 'Remove Todo',
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatchTodoAction({
      type: 'Toggle Todo',
      payload: id,
    });
  };

  return {
    todos,
    allTodos : todos.length,
    pendingTodos : todos.filter(t=>!t.done).length,
    handleAddTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
