import React from 'react'
import {ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import Task from './Task'

const ToDoList = (props) => {
    const {tasksList, removeTask, clearList} = props
    return (
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
    )
}
export default ToDoList