import { useDispatch, useSelector } from 'react-redux';
import { CardDiv, ListaTodo } from './styled';
import { BsFillTrashFill } from 'react-icons/bs';
import { RootState } from '../../store';
import { deleteTodoItem, toggleCheck } from '../../store/reducers/todoList';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

export default function Card() {
  const dispatch = useDispatch();
  const todoList = useSelector((store: RootState) => store.todoListSlice);

  const handleDispatch = (action: ActionCreatorWithPayload<number, string>, index: number) => () => {
    dispatch(action(index));
  }

  return (
    <CardDiv>
      <h1>Tarefas</h1>
      <ListaTodo>
        {todoList.length !== 0 ? (
          todoList.map((item, index) => (
            <li key={item.id} style={{ textDecoration: item.checked ? 'line-through' : 'none'}}>
              <input type='checkbox' id={item.id} checked={item.checked} onChange={handleDispatch(toggleCheck, index)} />
              <label htmlFor={item.id} style={{opacity: item.checked ? '0.7' : '1' }} >{item.text}</label>
              {item.checked && (
                <button onClick={handleDispatch(deleteTodoItem, index)}><BsFillTrashFill/></button>
              )}
            </li>
          ))
        ) : (
          <p style={{opacity: 0.6}} >nenhuma por enquanto</p>
        )}
      </ListaTodo>
    </CardDiv>
  );
}
