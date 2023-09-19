import { useState } from 'react'
import './TodoItem.css'

export default function TodoItem( {taskContent, handleRemove, id} ){
    const [toggled, setToggled] = useState(false)
    const [editing, setEditing] = useState(false)
    const [taskValue, setTaskValue] = useState(taskContent)
    const [task, setTask] = useState(<p>{taskValue}</p>)
    function handleClick(e){
        if(toggled) return
      if(editing){
        e.target.parentNode.querySelector('.edit-save-btn').textContent = "Edit"
        e.target.parentNode.parentNode.querySelector('.checkbox').disabled = false
        e.target.parentNode.querySelector('.remove-btn').disabled = false
        setTask(<p>{taskValue}</p>)
        setEditing(editing => !editing)  
      } else {
        e.target.parentNode.parentNode.querySelector('.checkbox').disabled = true
        e.target.parentNode.querySelector('.remove-btn').disabled = true
        e.target.parentNode.querySelector('.edit-save-btn').textContent = "Save"
        setTask(<textarea className='edit-input' onChange={e => setTaskValue(e.target.value)} defaultValue={taskValue}></textarea>)
        setEditing(editing => !editing)  
      }
    }
    function handleChange(e){
        if(!toggled){
          e.target.parentNode.style.textDecoration = 'line-through'
          e.target.parentNode.querySelector('.edit-save-btn').disabled = true
          e.target.parentNode.querySelector('.remove-btn').disabled = true
        } else{
          e.target.parentNode.style.textDecoration = 'none'
          e.target.parentNode.querySelector('.edit-save-btn').disabled = false
          e.target.parentNode.querySelector('.remove-btn').disabled = false
        }
        setToggled(toggled => !toggled)
    }
    function handleRemoveButton(e){
        if(toggled) return
        handleRemove(e)
    }
    return (
        <div className="container" onKeyDown={e => e.key === "Enter" ? handleClick(e) : ''} id={id}>
          <input className="checkbox" onChange={e => handleChange(e)} type="checkbox"></input>
          {task}
          <div>
          <button className="edit-save-btn" onClick={e => handleClick(e)} >Edit</button>
          <button className="remove-btn" onClick={e => handleRemoveButton(e)}>Remove</button>
          </div>
        </div>
    );
}