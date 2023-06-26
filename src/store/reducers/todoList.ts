import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { TodoItem } from '../../interfaces/todoItem';

const initialState: TodoItem[] = [];

const todoListSlice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
    toggleCheck: (state, { payload: index }: { payload: number }) => {
      const array = [...state];
      array[index] = {
        ...array[index],
        checked: !array[index].checked,
      };
      return array;
    },
    addTodoItem: (state, { payload: text }: { payload: string }) => {
      return [
        ...state,
        {
          checked: false,
          text,
          id: uuidv4(),
        },
      ];
    },
    deleteTodoItem: (state, { payload: index }: { payload: number }) => {
      const array = [...state];
      array.splice(index, 1);
      return array;
    },
  },
});

export const { toggleCheck, addTodoItem, deleteTodoItem } =
  todoListSlice.actions;
export default todoListSlice.reducer;
