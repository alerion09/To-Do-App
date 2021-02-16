import React from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Task from './Task'
import AddToDo from './AddToDo'
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';

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
    return(
        <div className='container'>
            <section>
                <ListGroup>
                    {data.map((object)=>{
                        const {id, content} = object
                        return(
                            <ListGroupItem key={id}>
                                <Task key={id} id={id} content={content}/>
                            </ListGroupItem>
                        )})}
                </ListGroup>
                <div className='flex-column-center'>
                    <Button className='mt-3'>Clear List</Button>
                </div>
            </section>
            <section>
                <AddToDo />
            </section>
        </div>
    )
}
export default App