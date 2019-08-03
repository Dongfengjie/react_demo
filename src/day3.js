import React, { Component } from 'react';
import {Button,Input} from 'antd'
const { Search } = Input;

class day3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ayy1: [10, 66, 98, 55, 31, 5, 5, 99, 67, 31, 99, 2],
        }
    }

    px = () => {
        this.setState({
            ayy1: this.state.ayy1.sort((a, b) => {
                return b - a
            })
        },() => {console.log(this.state.ayy1)})
    }

    render() {
        return (
            <div className='day3'>
                <p>
                    数组排序后渲染到页面
                    {this.state.ayy1.map((item) => { return item + ',' })}
                    <button onClick={this.px}>排序</button>
                </p>

                <p>
                    set数组去重后{[...new Set(this.state.ayy1)].map((item)=>{return item+','})}
                </p>
                <Button type="danger">Danger</Button>
                
                <Search
                    placeholder="input search text"
                    enterButton="Search"
                    className='ipt'
                    onSearch={value => console.log(value)}
                />
            </div>
        )
    }
}

export default day3;