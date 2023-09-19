import { useState } from 'react'
import './TodoForm.css'

export default function TodoForm( { setTodoList }){
    const [value, setValue] = useState('')
    const [id, updateId] = useState(0)

    function clickHandler(e){
        if(value.length <= 0) return
        setTodoList(prev => [...prev, {value: value, id: id}])
        updateId(prev => prev+2)
        setValue('')
        e.target.parentNode.querySelector('.form-input').value = ''
        setTimeout(() => {
            const itemContainer = e.target.parentNode.parentNode.querySelector('.item-container')
            itemContainer.scrollTo(0, -itemContainer.scrollHeight)
        }, 1);
    }
    return(
        <div className='form-container'>
            <input className="form-input" type='text' onChange={e => setValue(e.target.value)} defaultValue={value}></input>
            <button className="form-add" onClick={e => clickHandler(e)}>Add</button>
        </div>
    )
}