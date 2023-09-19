import { useState } from 'react';
import './App.css';
import TodoItem from './Components/TodoItem/TodoItem'
import TodoForm from './Components/TodoForm/TodoForm';

function App() {
  const [todoList, setTodoList] = useState([])

  function handleRemove(e) {
    const elementid = e.target.parentNode.parentNode.id
    setTodoList(todoList.filter(el => el.id !== +elementid))
  }
  
  const Items = todoList.map(task => <TodoItem handleRemove={handleRemove} taskContent={task.value} key={task.id} id={task.id}/>)
  // console.log(Items)

  return(
    <div className='App'>
      <TodoForm setTodoList={setTodoList}/>
      <div>
        <div className='item-container'>
          {Items}
        </div>
      </div>
    </div>
  )
}

export default App;
