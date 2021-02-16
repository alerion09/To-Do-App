import React from 'react'
import {Button, Form} from 'react-bootstrap'

const AddToDo = ()=>{
    const saveTask = ()=>{
        console.log(document.getElementById('task-text').value)
    }
    return(
        <Form>
            <Form.Label>Enter your task</Form.Label>
            <div className='flex-column-center'>
                <Form.Control id='task-text' placeholder='Something to do...'></Form.Control>
                <Button className='mt-3' onClick={saveTask}>Add task</Button>
            </div>
            
        </Form> 
    )
}
export default AddToDo