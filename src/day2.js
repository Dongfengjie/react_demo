import React,{Component} from 'react';
import {Link,Prompt} from 'react-router-dom'

export default class day2 extends Component {
    constructor(props){
        super(props);
        this.state ={}
    }
    
    render(){
        return(
            <div className='day2'>
                <p>css自适应布局 左侧固定 右侧auto</p>
                <p>路由带参数跳转</p>
                <p>路由离开前检测</p>
                <Link to={{
                    pathname:'/day1/300',
                    search:'200',
                    state:{
                        yw:'931103',
                        dj:'920904',
                        we:'1560&restart'
                    }
                }}>click me</Link>

                <Prompt message={location =>{
                  return location.pathname.startsWith('/day1') ? `确定要离开day2页面吗？`:true
                }} />  
            </div>
        )
    }
}

