import React, {useEffect, useReducer} from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TaskInput from './TaskInput'
import ToDoList from './ToDoList'

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_TASKS_LIST' :
            const newList = action.payload
            return {
                ...state,
                tasksList:newList
            }
        case 'UPDATE_TASKS_LIST' :
            const newUpdatedList = [...state.tasksList, action.payload]
            return {
                ...state,
                tasksList:newUpdatedList
            }
        case 'CLEAR_TASKS_LIST' :
            return {
               ...state,
               tasksList:[],
               activeUseEffect:true
            }
        case 'SET_CURRENT_ID' :
            const newId = action.payload
            return {
                ...state,
                currentId:newId
            }
        case 'INCREASE_CURRENT_ID' :
            return {
                ...state,
                currentId: state.currentId + 1
            }
        case 'SET_TASK_TEXT' :
            const newTaskText = action.payload
            return {
                ...state,
                taskText:newTaskText
            }
        case 'TOGGLE_USE_EFFECT' :
            const newUseEffectState = action.payload
            return {
                ...state,
                activeUseEffect:newUseEffectState
            }
        case 'TOGGLE_INPUT_CORRECT' :
            const newInputState = action.payload
            return {
                ...state,
                isInputCorrect:newInputState
            }
        default:
            throw new Error('WRONG TYPE OF DISPATCH')
    }
}
const initialState = {
    tasksList:[],
    currentId:1,
    taskText:'',
    isInputCorrect:true,
    activeUseEffect:false
}
const App = ()=>{
    
    const [state, dispatch] = useReducer(reducer, initialState)
    //UseEffect that is initializing only once  
    useEffect(() => {
        checkIsLocalTasksList()  
    },[])
    //UseEffect that is initializing only if activeUseEffect state is set to true
    useEffect(()=> {
        if (state.activeUseEffect) {
            saveToLocalStorage()
        }
    },)
    //Function checikng if tasks-list local storage item exist - if exist then pushing storaged data into tasksList useState
    //- if is not then creating empty array item in local storage. 
    const checkIsLocalTasksList = () => {
        const localTasksList = localStorage.getItem('tasks-list')
        const localCurrentId = localStorage.getItem('current-id')
        if (localTasksList) {
            const loadedTasksList = (JSON.parse(localTasksList))
            const loadedCurrentId = (JSON.parse(localCurrentId))
            console.log(loadedTasksList)
            console.log(loadedCurrentId)
            dispatch({type: 'SET_TASKS_LIST', payload: loadedTasksList})
            dispatch({type: 'SET_CURRENT_ID', payload: loadedCurrentId})
        } 
        else {
            localStorage.setItem('tasks-list', '[]')
            localStorage.setItem('current-id', '1')
            console.log('set items')
        }
    }
    //Function removing all objects from tasksList
    const clearList = () =>{
        dispatch({type: 'CLEAR_TASKS_LIST'})
    }
    //Set state of TaskText getting text from input
    const changeTaskText = (event) => {
        const newText = (event.target.value)
        dispatch({type:'SET_TASK_TEXT', payload: newText})
    }
    //Function responsible for getting typed text, creating object and adding them into tasksList array
    const addTask = (e)=>{
        e.preventDefault()
        if (state.taskText) {
            const task = {id: state.currentId, content: state.taskText}
            dispatch({type: 'UPDATE_TASKS_LIST', payload: task})
            dispatch({type:'TOGGLE_USE_EFFECT', payload: true})
            dispatch({type:'SET_TASK_TEXT', payload: ''})
            dispatch({type:'TOGGLE_INPUT_CORRECT', payload: true})
            dispatch({type:'INCREASE_CURRENT_ID'})
        }
        else {
            dispatch({type:'TOGGLE_INPUT_CORRECT', payload: false})
        }
    }
    //Function responsible for removing object from tasksList array
    const removeTask = (id) =>{
        let filteredList = state.tasksList.filter((object) => object.id !== id)
        console.log(filteredList)
        dispatch({type: 'SET_TASKS_LIST', payload: filteredList})
        dispatch({type:'TOGGLE_USE_EFFECT', payload:true})
    }
    const saveToLocalStorage = () => {
        localStorage.setItem('tasks-list', JSON.stringify(state.tasksList))
        localStorage.setItem('current-id', JSON.stringify(state.currentId))
    }
    return(
        <div className='container'>
            <ToDoList tasksList={state.tasksList} removeTask={removeTask} clearList={clearList} />
            <TaskInput taskText={state.taskText} addTask={addTask} changeTaskText={changeTaskText} isInputCorrect={state.isInputCorrect}/>
        </div>
    )
}  
export default App