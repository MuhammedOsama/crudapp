import React from 'react';

// style
import './styles/AddCourse.scss';

export default function AddCourse(props) {
    return <div>
        <form onSubmit={props.addCourse}>
            <input type='text' placeholder='Add Course...' value={props.current} onChange={props.updateCourse}/>
            <button type='submit'>Add Course</button>
        </form>
    </div>
}
