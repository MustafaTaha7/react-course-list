import React  from "react";

 const CourseForm = (props) =>{

  return (
    <section className="App">
     <form onSubmit={props.addCourse}>
       <input type="text" onChange={props.updateCourse}  value={props.current}/>
       <button type="submit">Add Course</button>
     </form>
    </section>
  )
}

export default CourseForm;
