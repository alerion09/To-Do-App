import React from 'react'

const Task = (props) =>{
    const {index, content} = props
    return(
        <div>
            <span>{`${index}. `}</span>
            <span>{content}</span>
        </div>
    )
}
export default Task