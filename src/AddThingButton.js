import React from 'react'
import './AddThingButton.css'

const AddThingButton = (props) => {
    return (
        <button className="add-thing" onClick={props.addThing}>Add Thing</button>
    )
}

export default AddThingButton