import React from 'react'
import {ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import Task from './Task'
import {FaTrashAlt} from 'react-icons/fa'
const ToDoList = (props) => {
    const {tasksList, removeTask, clearList} = props
    if (tasksList === null || tasksList.length === 0){
        return (
            <section className='flex-column-center' id='section-empty-list'>
                <h4>To Do List is Empty</h4>
            </section>
        )
    } 
    else {
        return (
            <section id='section-filled-list'>
                <ListGroup>
                    {tasksList.map((object, index)=>{
                        const {id, content} = object
                        return(
                            <ListGroupItem key={id}>
                                <div className='flex-row'>
                                    <Task key={id} index={index+1} content={content}/>
                                    <Button size='sm' onClick={() => removeTask(id)}><FaTrashAlt /></Button>
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
}
export default ToDoList