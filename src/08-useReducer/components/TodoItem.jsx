
export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className='list-group-item d-flex justify-content-between'>
      <span
      className={`align-self-center${todo.done ? ' lt' : ''}`}
      onClick={() => onToggleTodo(todo.id)}>
        {todo.description}
      </span>
      <button className='btn btn-sm btn-danger' onClick={() => onDeleteTodo(todo.id)}>
        Borrar
      </button>
    </li>
  );
};
