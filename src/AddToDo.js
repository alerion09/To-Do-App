import React from 'react'
import {Button, Form} from 'react-bootstrap'
const AddToDo = ()=>{
    return(
        <section>
            <Form>
                <Form.Label>Enter your task</Form.Label>
                <div className='flex-column-center'>
                    <Form.Control placeholder='Something to do...'></Form.Control>
                    <Button className='mt-3'>Add task</Button>
                </div>
                
            </Form> 
        </section>
    )
}
export default AddToDo