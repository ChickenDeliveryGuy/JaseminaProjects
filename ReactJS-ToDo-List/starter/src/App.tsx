import React, { useState } from 'react';
import './App.css';

interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
}

const App: React.FC = () => {
  
  const [todosList, setTodosList] = useState<Todo[]>([
    {
      id: 100,
      title: 'Clean room',
      isCompleted: true,
    },
    {
      id: 200,
      title: 'Go to the gym',
      isCompleted: false,
    },
    {
      id: 300,
      title: 'Learn React',
      isCompleted: false,
    },
    {
      id: 400,
      title: 'Learn Javascript',
      isCompleted: false,
    },
  ]);

  const [inputValue, setInputValue] = useState('');
  const [isInputFieldShown, setIsInputFieldShown] = useState(true);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onAddNewTodo = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue !== '') {
      setTodosList([
        ...todosList,
        { id: new Date().valueOf(), title: inputValue, isCompleted: false },
      ]);
      setInputValue('');
    }
  };

  const onDeleteTodo = (todoIdToDelete: number) => {
    const filteredTodos = todosList.filter(
      (todo) => todo.id !== todoIdToDelete
    );
    setTodosList(filteredTodos);
  };

  const toggleInputVisibility = () => {
    console.log('klikova ikonen');

    setIsInputFieldShown((prevState) => !prevState);
  };

  const onTodoComplete = (todoIdToComplete: number) => {
    console.log('klikova todo qe e mbarova', todoIdToComplete);

    const changedTodoList = todosList.map((todo) => {
      if (todo.id === todoIdToComplete) {
        return {
          id: todo.id,
          title: todo.title,
          isCompleted: !todo.isCompleted,
        };
      } else return todo;
    });

    setTodosList(changedTodoList);
  };

  return (
    <div id='container' className='App'>
      <h1>
        To-Do List
        <i
          onClick={toggleInputVisibility}
          className={isInputFieldShown ? 'fa fa-toggle-on' : 'fa fa-toggle-off'}
          id='kopce'
          style={{ float: 'right' }}
          aria-hidden='true'
        ></i>
      </h1>
      
      {isInputFieldShown && (
        <input
          onChange={onInputChange}
          value={inputValue}
          type='text'
          placeholder='Add New Todo'
          onKeyUp={onAddNewTodo}
        />
      )}
      <ul>
        {todosList.map((todoItem: Todo, index: number) => {
          
          return (
            <li
              className={todoItem.isCompleted === true ? 'el crossed' : 'el'}
              key={index}
              onClick={() => onTodoComplete(todoItem.id)}
            >
              <span className='trash' onClick={() => onDeleteTodo(todoItem.id)}>
                <i className='fa fa-trash'></i>
              </span>
              {todoItem.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
