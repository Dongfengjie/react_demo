//内部组件的方法和传值、组件静态方法的实现
import React, { Component} from 'react';

const  Hello=(props)=> { 
  return <p onClick={props.fc}>this is props value,{props.name}</p>
 }
// *静态方法:即使没有实例也可以直接调用*
//创建一个类
class learnstatic{
  //函数构造器,每当new这个类的时候，必然优先执行构造器中的代码
   constructor(num,age){
     //实例属性
     this.num = num
     this.age = age
   }
   //实例方法
   toxic(a){
     console.log(a)
   }
   //静态方法
   static type(a,b){
     console.log([a,b])
     console.log([...a,...b])
     return [...a,...b]
    }
 }
 const a1 = new learnstatic(8)
 console.log(a1)

 class Day1 extends Component {
   constructor(props) {
     super(props);
     this.state = {
       num:0,
    }
  }

  componentWillMount(){
    console.log(this.props)
  }

  sonClick=(value)=>{
    alert(value)
  }

  son_2_click=(a,b,c)=>{
    let num = 0
    num = a+b+c
    this.setState({
      num:num
    })
  }

  render() {
    return ( 
      <div className='day1'>
        <h2>垂直居中</h2>
        <div className="son">
          <Hello name={'lihua'} fc={(e)=>this.sonClick('test1')}></Hello>
          <Hello name={this.state.num} fc={(e)=>this.son_2_click(1,2,3)}></Hello>
          <Hello name={learnstatic.type([12389,1166],[45,98,73])}></Hello>
          <p>day2传过来的参数为{this.props.match.params.id},{this.props.location.state.we}</p>
        </div>
      </div>
    )
  }
}

export default Day1;