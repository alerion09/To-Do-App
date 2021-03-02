import React, {useState} from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TaskInput from './TaskInput'
import ToDoList from './ToDoList'

let currentId = 0
const App = ()=>{
    
    let [tasksList, setTasksList] = useState([])
    
    //Function removing all objects from tasksList
    const clearList = () =>{
        setTasksList([])
    }
    //Function responsible for getting typed text, creating object and adding them into tasksList array
    const addTask = ()=>{
        const taskText = document.getElementById('task-text')
        if (taskText.value !== ''){
            currentId = currentId + 1
            const text = taskText.value
            setTasksList(oldList => [...oldList, {id: currentId,content: text}])
            taskText.className='form-control'
            taskText.value=''
        }
        else {
            taskText.className='form-control is-invalid'
        }
    }
    //Function responsible for removing object from tasksList array
    const removeTask = (id) =>{
        let filteredList = tasksList.filter((object) => object.id !== id)
        setTasksList(filteredList)
    }
    return(
        <div className='container'>
            <ToDoList tasksList={tasksList} removeTask={removeTask} clearList={clearList} />
            <TaskInput addTask={addTask} />
        </div>
    )
}
export default App