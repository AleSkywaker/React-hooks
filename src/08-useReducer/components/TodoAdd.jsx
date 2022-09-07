import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ onAddTodo}) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: '',
  });

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    };
    onAddTodo && onAddTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <input
        type='text'
        placeholder='¿Que hay que hacer?'
        className='form-control'
        name='description'
        value={description}
        onChange={onInputChange}
      />
      <button type='submit' className='btn btn-sm btn-warning mt-3'>
        Agregar
      </button>
    </form>
  );
};
