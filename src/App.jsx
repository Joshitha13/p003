import React, { Component } from 'react';
import './App.css';
import CourseCard from './CourseCard.jsx';

class App extends Component {
  constructor(){
    super();
    this.state = {courses:[
      {name:"Data Structure and Algorithms", duration:"40hrs", price:"$100", img:"1.jpg"},
      {name:"Java Programming", duration: "30hrs", price:"$80", img:"2.jpg"},
      {name:"React JS", duration:"40hrs", price:"$120", img:"3.jpg"},
      {name:"Machine Learning", duration: "35hrs", price:"$200", img:"4.jpg"},
    ]};
  }

  render() {
    const {courses} = this.state;
    
    return (
      <div className='app'>
        <div className='header'>Course Catalog</div>
        <div className='section'>
          {courses.map((data)=>(
            <CourseCard data={data} />
          ))}
        </div>
        <div className='footer'>Copyright @ 2026. All rights reserved.</div>
      </div>
    );
  }
}

export default App;