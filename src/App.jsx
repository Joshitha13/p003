import React, { Component } from 'react';
import './App.css';
import CourseCard from './CourseCard.jsx';
import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';
import img4 from './assets/4.jpg';


class App extends Component {
  constructor(){
    super();
    this.state = {
  courses:[
    {name:"Data Structure and Algorithms", duration:"40hrs", price:"$100", img: img1},
    {name:"Java Programming", duration:"30hrs", price:"$80", img: img2},
    {name:"React JS", duration:"40hrs", price:"$120", img: img3},
    {name:"Machine Learning", duration:"35hrs", price:"$200", img: img4},
  ]
};

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