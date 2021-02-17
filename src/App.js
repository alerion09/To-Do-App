import React from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Task from './Task'
import { ListGroup, ListGroupItem, Button, Form} from 'react-bootstrap';

let currentId = 0
const App = ()=>{
    
    let [tasksList, setTasksList] = React.useState([])
    const clearList = () =>{
        setTasksList([])
    }
    const addTask = ()=>{
        const taskText = document.getElementById('task-text')
        if (taskText.value !== ''){
            currentId = currentId + 1
            setTasksList(oldList => [...oldList, {id: currentId,content: taskText.value}])
            taskText.className='form-control'
        }
        else {
            taskText.className='form-control is-invalid'
        }
    }
    const removeTask = (id) =>{
        let filteredList = tasksList.filter((object) => object.id !== id)
        setTasksList(filteredList)
    }
    return(
        <div className='container'>
            <section>
                <ListGroup>
                    {tasksList.map((object)=>{
                        const {id, content} = object
                        return(
                            <ListGroupItem key={id}>
                                <div className='flex-row'>
                                    <Task key={id} id={id} content={content}/>
                                    <Button onClick={() => removeTask(id)}>Remove</Button>
                                </div>
                            </ListGroupItem>
                        )})}
                </ListGroup>
                <div className='flex-column-center'>
                    <Button className='mt-3' onClick={clearList}>Clear List</Button>
                </div>
            </section>
            <section>
                <Form>
                    <Form.Label>Enter your task</Form.Label>
                        <div className='flex-column-center'>
                            <Form.Control id='task-text' placeholder='Something to do...'></Form.Control>
                            <Form.Control.Feedback type="invalid">
                                This field can't be empty.
                            </Form.Control.Feedback>
                            <Button className='mt-3' onClick={addTask}>Add task</Button>
                        </div>
                </Form> 
            </section>
        </div>
    )
}
export default App