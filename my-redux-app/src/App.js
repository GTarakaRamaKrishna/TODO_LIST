import React from 'react'
import { addTodo } from './actions';
import { useDispatch, useSelector } from 'react-redux';


const containerStyle = {
  width: '50%',
  margin: '0 auto',
  padding: '20px',
  textAlign: 'center',
  backgroundColor: 'silver',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};
const inputStyle = {
  padding: '10px',
  fontSize: '16px',
  borderRadius: '4px',
  border: '1px solid #ddd',
  marginRight: '10px',
  
};

const buttonStyle={
  padding:'5px 10px',
  fontSize:'16px',
  borderRadius:'4px',
  border:'none',
  backgroundColor:'red',
  margin:'2px',
  color:'white',
  cusor:'pointer',
  transition:'background-color 1s ease',
 
};

const buttonHoverStyle = {
  backgroundColor: 'blue'
};
const ulStyle={
  listStyleType:'number',
  padding:'0',
  textAlign:'left'
}
const liStyle={
padding:'10px',
borderButom:'1px solid #ddd',

}

function App() {
  const todos=useSelector(state=>state.todos);
  const [inputValue,setInputValue]=React.useState('');
  const dispatch=useDispatch();

  const handleAddTodo=()=>{
    dispatch(addTodo(inputValue));
    setInputValue('');
  };
  return (
    <div style={containerStyle}>
      
      <h1>TODO_LIST</h1>
      <input 
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
       />

       <button onClick={handleAddTodo} 
       style={buttonStyle}

       onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
       onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
      >
        Add Todo</button>
       <ul style={ulStyle}>
        {todos.map((todo, index)=>(
          <li key={index} style={liStyle}>{todo.text}</li>
        ))}
       </ul>
      
    </div>
  )
}

export default App;
