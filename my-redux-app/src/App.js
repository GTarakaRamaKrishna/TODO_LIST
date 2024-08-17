import React from 'react'
import { addTodo } from './actions';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const [inputValue,setInputValue]=React.useState('');
  const dispatch=useDispatch();
  const todos=useSelector(state=>state.todos);

  const handleAddTodo=()=>{
    dispatch(addTodo(inputValue));
    setInputValue('');
  }
  return (
    <div>
      <h1>TODO_LIST</h1>
      <input 
      type="text"
      value={inputValue}
      onChange={(e)=>setInputValue(e.target.value)}/>
      <button onClick={handleAddTodo}>add todo</button>
      <ul>
        {todos.map((todo,index)=>(
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
