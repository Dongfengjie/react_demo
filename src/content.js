//内部组件的方法和传值、组件静态方法的实现
import React, { Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import day1 from './day1'
import day2 from './day2'
import day3 from './day3'

 class content extends Component {
   constructor(props) {
     super(props);
     this.state = {}
  }
  
  render() {
    return ( 
      <div className='contstyle'>
        <Switch>
          <Route path="/day1/:id" component={day1} />
          <Route path="/day2" component={day2} />
          <Route path="/day3" component={day3} />
        </Switch>
      </div>
    )
  }
}

export default content;