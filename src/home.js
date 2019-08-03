//内部组件的方法和传值、组件静态方法的实现
import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import Content from './content'

 const List=(props)=>{
  return props.data.map((key,value)=>{
      return  <li key={value}><Link to={key.path} key={value}>{key.name}</Link></li> 
  })
 }

 class Home extends Component {
   constructor(props) {
     super(props);
     this.state = {}
  }

  render() {
    const listdata =[
      {
        name:'day1',
        path:'/day1'
      },
      {
        name:'day2',
        path:'/day2'
      },
      {
        name:'day3',
        path:'/day3'
      }
    ]

    const homestyle ={
      display:'flex'
    }
    return ( 
      <div style={homestyle}>
        <ul className='sidebars'>
          <List data={listdata}></List>
        </ul>
        <Content />
      </div>
    )
  }
}

export default Home;