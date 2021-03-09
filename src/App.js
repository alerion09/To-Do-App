import React, {useState, useEffect} from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TaskInput from './TaskInput'
import ToDoList from './ToDoList'

// let currentId = 0
const App = ()=>{
    
    const [tasksList, setTasksList] = useState([])
    const [currentId, setCurrentId] = useState(1)
    const [activeUseEffect, setActiveUseEffect] = useState(false)
    const [taskText, setTaskText] = useState('')
    const [isInputCorrect, setIsInputCorrect] = useState(true)
    //UseEffect that is initializing only once  
    useEffect(() => {
        checkIsLocalTasksList()  
    },[])
    //UseEffect that is initializing only if activeUseEffect state is set to true
    useEffect(()=> {
        if (activeUseEffect) {
            saveToLocalStorage()
        }
    },)
    //Function checikng if tasks-list local storage item exist - if exist then pushing storaged data into tasksList useState
    //- if is not then creating empty array item in local storage. 
    const checkIsLocalTasksList = () => {
        const localTasksList = localStorage.getItem('tasks-list')
        const localCurrentId = localStorage.getItem('current-id')
        if (localTasksList) {
            setTasksList(JSON.parse(localTasksList))
            setCurrentId(JSON.parse(localCurrentId))
        } 
        else {
            localStorage.setItem('tasks-list', '[]')
            localStorage.setItem('current-id', '1')
        }
    }
    //Function removing all objects from tasksList
    const clearList = () =>{
        setTasksList([])
        setActiveUseEffect(true)
    }
    //Set state of TaskText getting text from input
    const changeTaskText = (event) => {
        setTaskText(event.target.value)
    }
    //Function responsible for getting typed text, creating object and adding them into tasksList array
    const addTask = ()=>{
        const inputText = document.getElementById('task-text')
        if (taskText !== ''){
            setTasksList(oldList => [...oldList, {id: currentId, content: taskText}])
            setCurrentId(currentId + 1)
            setActiveUseEffect(true)
            setIsInputCorrect(true)
            setTaskText('')
            inputText.value = ''
        }
        else {
            setIsInputCorrect(false)
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
        localStorage.setItem('current-id', JSON.stringify(currentId))
    }
    return(
        <div className='container'>
            <ToDoList tasksList={tasksList} removeTask={removeTask} clearList={clearList} />
            <TaskInput addTask={addTask} changeTaskText={changeTaskText} isInputCorrect={isInputCorrect}/>
        </div>
    )
}  
export default App