import { Component } from "react";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";

class App extends Component {
  state = {
    courses: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Jquery" },
      { name: "React" },
    ],
    current: "",
  };

  //updateCourse
  updateCourse = (e) => {
    this.setState({
      current: e.target.value,
    });
  };

  //addCourse
  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    const courses = this.state.courses;
    courses.push({ name: current });
    this.setState({
      courses,
      current:''
    });
  };


  //deleteCourse
  deleteCourse = (index) => {
    
    const courses = this.state.courses;
    courses.splice(index, 1)
    this.setState({
      courses
    })
  };

  render() {
    const { courses } = this.state;
    const courseList = courses.map((course, index) => {
      return <CourseList details={course} key={index} index={index} deleteCourse={this.deleteCourse} />;
    });
    return (
      <section className="App">
        <h2>Add Course</h2>
        <CourseForm
          updateCourse={this.updateCourse}
          addCourse={this.addCourse}
          current ={this.state.current}
        />
        <ul>{courseList}</ul>
      </section>
    );
  }
}

export default App;
