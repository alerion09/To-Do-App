import React from 'react'

const Task = (props) =>{
    const {id, content} = props
    return(
        <div>
            <span>{`${id}. `}</span>
            <span>{content}</span>
        </div>
    )
}
export default Task