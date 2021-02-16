import React from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import List from './List'
import AddToDo from './AddToDo'


const App = ()=>{
    return(
        <div className='container'>
            <List />
            <AddToDo />
        </div>
    )
}
export default App