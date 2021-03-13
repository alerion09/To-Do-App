import React from 'react'
import {Button, Form} from 'react-bootstrap'

const TaskInput = (props) => {
    const {addTask, changeTaskText, isInputCorrect, taskText} = props
    return (
        <section>
            <Form onSubmit={addTask}>
                <Form.Label>Enter your task:</Form.Label>
                    <div className='flex-column-center'>
                        <Form.Control type='text' id='task-text' placeholder='Something to do...' name='task-text' onChange={changeTaskText} 
                        value={taskText} className={isInputCorrect ? 'form-control' : 'form-control is-invalid'} ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            This field can not be empty.
                        </Form.Control.Feedback>
                        <Button type='submit' className='mt-3'>Add Task</Button>
                    </div>
            </Form> 
        </section>
    )
}
export default TaskInput