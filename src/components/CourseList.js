import React, { Component } from "react";

class courseList extends Component {
  renderCourse() {
    return (
      <li>
        <span>{this.props.details.name}</span>
        <button onClick={() => this.props.deleteCourse(this.props.index)}>
          Delete Course
        </button>
      </li>
    );
  }
  render() {
    return <>{this.renderCourse()} </>;
  }
}
export default courseList;
