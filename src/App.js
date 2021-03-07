import React, {useState, useEffect, useRef} from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TaskInput from './TaskInput'
import ToDoList from './ToDoList'
import {Button} from 'react-bootstrap'

let currentId = 0
const App = ()=>{
    
    const [tasksList, setTasksList] = useState([])
    const [activeUseEffect, setActiveUseEffect] = useState(false)

    //UseEffect that is initializing only once  
    useEffect(() => {
        checkIsLocalTasksList()  
    },[])
    //UseEffect that is initializing only if activeUseEffect state is set to true
    useEffect(()=> {
        if (activeUseEffect) {
            console.log('update')
            saveToLocalStorage()
        }
    },)
    
    //Function checikng if tasks-list local storage item exist - if exist then pushing storaged data into tasksList useState
    //- if is not then creating empty array item in local storage. 
    const checkIsLocalTasksList = () => {
        const localTasksList = localStorage.getItem('tasks-list')
        if (localTasksList) {
            setTasksList(JSON.parse(localTasksList))
            console.log('load local storage')
            console.log(localTasksList)
        } 
        else {
            localStorage.setItem('tasks-list', '[]')
            console.log('create local storage')
            console.log(localStorage.getItem('tasks-list'))
        }
    }
    //Function removing all objects from tasksList
    const clearList = () =>{
        setTasksList([])
        setActiveUseEffect(true)
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
            setActiveUseEffect(true)
        }
        else {
            taskText.className='form-control is-invalid'
        }
    }
    //Function responsible for removing object from tasksList array
    const removeTask = (id) =>{
        let filteredList = tasksList.filter((object) => object.id !== id)
        setTasksList(filteredList)
        setActiveUseEffect(true)
    }
    const saveToLocalStorage = () => {
        localStorage.setItem('tasks-list', JSON.stringify(tasksList))
        console.log(localStorage.getItem('tasks-list'))
    }
    return(
        <div className='container'>
            <ToDoList tasksList={tasksList} removeTask={removeTask} clearList={clearList} />
            <TaskInput addTask={addTask} />
            <Button>click</Button>
        </div>
    )
}
export default App