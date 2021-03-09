import React from 'react'
import {Button, Form} from 'react-bootstrap'

const TaskInput = (props) => {
    const {addTask, changeTaskText, isInputCorrect} = props
    return (
        <section>
            <Form>
                <Form.Label>Enter your task</Form.Label>
                    <div className='flex-column-center'>
                        <Form.Control id='task-text' placeholder='Something to do...' name='task-text' onChange={changeTaskText} 
                        className={isInputCorrect ? 'form-control' : 'form-control is-invalid'} ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            This field can not be empty.
                        </Form.Control.Feedback>
                        <Button className='mt-3' onClick={addTask}>Add task</Button>
                    </div>
            </Form> 
        </section>
    )
}
export default TaskInput