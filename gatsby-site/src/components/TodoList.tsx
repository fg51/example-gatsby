import React, { useState} from 'react';

import {IonLabel} from "@ionic/react";

function TodoList() {
  const initialState = [
    {
      task: 'Learn vue.js',
      isCompleted: false
    },
    {
      task: 'Learn React Hook',
      isCompleted: false
    },
    {
      task: 'Learn Gatsby.js',
      isCompleted: false
    },
  ]

  const [todos, setTodo] = useState(initialState);
  const [task, setTask] = useState('');

  const handleNewTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setTask(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if(task === '') return
    setTodo(todos => [...todos, { task, isCompleted: false }])
    setTask('')
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={ handleSubmit }>
      Add Task : <input value={ task } placeholder="Add New Task" onChange={handleNewTask}/>
      </form>
      <ul>
        { todos.map((todo, index) => (
          <li key={ index }>{ todo.task }</li>
        ))}
      </ul>

    </div>
  );
}

export default TodoList;
