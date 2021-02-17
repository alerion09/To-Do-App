import React from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Task from './Task'
import { ListGroup, ListGroupItem, Button, Form } from 'react-bootstrap';

const data = [
    {
        id: 1,
        content: "Example task"
    },
    {
        id: 2,
        content: "Example second task"
    },
    {
        id: 3,
        content: "Example third task"
    }
]
    
const App = ()=>{
    let [tasksList, setTasksList] = React.useState(data)
    const clearList = () =>{
        setTasksList([])
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
                                    <Button>Remove</Button>
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
                        <Button className='mt-3' >Add task</Button>
                    </div>
            </Form> 
            </section>
        </div>
    )
}
export default App