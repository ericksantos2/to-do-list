import { useDispatch } from 'react-redux';
import { NovoItemDiv } from './styled';
import { v4 as uuidv4 } from 'uuid';
import { addTodoItem } from '../../store/reducers/todoList';
import { useState } from 'react';

export default function CardNovoItem() {
  const id = uuidv4();
  const dispatch = useDispatch();
  const [tarefa, setTarefa] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (tarefa) {
      dispatch(addTodoItem(tarefa));
      setTarefa('');
    }
  };

  return (
    <NovoItemDiv>
      <label>Adicionar uma nova tarefa</label>
      <form onSubmit={handleSubmit}>
        <label htmlFor={id}>Tarefa</label>
        <input
          type='text'
          id={id}
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
        />
        <button type='submit'>Adicionar</button>
      </form>
    </NovoItemDiv>
  );
}
