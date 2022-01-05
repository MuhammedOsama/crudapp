import React, {Component} from 'react';

// components
import AddCourse from './components/AddCourse';
import CoursesList from './components/CoursesList';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [
                {name: 'React.js'},
                {name: 'Angular.js'},
                {name: 'Vue.js'}
            ],
            current: ''
        }
    }

    // update course
    updateCourse = e => this.setState({current: e.target.value});

    // add course
    addCourse = e => {
        e.preventDefault();
        const current = this.state.current;
        const courses = this.state.courses;
        courses.push({name: current});
        this.setState({courses, current: ''});
    }

    // delete course
    deleteCourse = id => {
        const courses = this.state.courses;
        courses.splice(id, 1);
        this.setState({courses});
    }

    // edit course
    editCourse = (index, value) => {
        const courses = this.state.courses;
        const course = courses[index];
        console.log('course: ' + course);
        course['name'] = value;
        this.setState({courses});
    }

    render() {
        const coursesList = this.state.courses.map((course, id) => <CoursesList
            key={id} index={id} courses={course} updateCourse={this.updateCourse} deleteCourse={this.deleteCourse}
            editCourse={this.editCourse}
        />);
        return <div className="App">
            <h2>Add Course</h2>
            <AddCourse updateCourse={this.updateCourse} addCourse={this.addCourse} current={this.state.current}/>
            <ul>{coursesList.length ? coursesList : <h3>There is no courses to show.</h3>}</ul>
        </div>
    }
}
