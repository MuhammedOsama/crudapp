import React, {Component} from 'react';

// style
import './styles/CoursesList.scss';

export default class CoursesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false
        }
    }

    // render course item
    renderCourses = _ => <li>
        <span>{this.props.courses.name}</span>
        <button onClick={() => this.toggleState()}>Edit Course</button>
        <button onClick={() => this.props.deleteCourse(this.props.index)}>Delete Course</button>
    </li>

    // toggle state
    toggleState = _ => this.setState({isEdit: !this.state.isEdit});

    // update course
    updateCourseItem = e => {
        e.preventDefault();
        this.props.editCourse(this.props.index, this.input.value);
        this.toggleState();
    }

    // render update form
    updateCourse = _ => <form onSubmit={this.updateCourseItem}>
        <input type="text" defaultValue={this.props.courses.name} ref={(value) => this.input = value}/>
        <button onClick={this.props.editCourse}>Update Course</button>
    </form>

    render() {
        return <>
            {this.state.isEdit ? this.updateCourse() : this.renderCourses()}
        </>
    }
}
