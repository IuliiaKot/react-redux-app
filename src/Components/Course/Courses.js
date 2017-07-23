import React, {Component} from 'react';

class Courses extends Component {
  constructor(props){
    super(props)
    this.state = {
      course: {title: null}
    }
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }
  onTitleChange(event){
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  onClickSave(event){
    console.log('save')
  }

  render(){
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Course</h2>
        <input
            type="text"
            onChange={this.onTitleChange}
            value={this.state.title}/>
          <input
            type="submit"
            value="Save"
            onClick={this.onClickSave}/>

      </div>
    )
  }
}

export default Courses;
