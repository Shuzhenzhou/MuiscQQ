import React from 'react'
import './Newsong.css'
import {Route,BrowserRouter as Router,NavLink,Redirect} from 'react-router-dom'

class Newsong extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:""
        }
    }
    btn(){
       var value=this.refs.name.value
    this.props.history.push({pathname:'/songlist',query:{name:value}})

    }
    back(){
        this.props.history.go(-1)
    }
    render(){
        return(
            <div className='newsong'> 
                <div className='newsong-nav'>
                    <p onTouchEnd={this.back.bind(this)}>返回</p>
                    <h3>新建歌单</h3>
                    <span onTouchEnd={this.btn.bind(this)}>保存</span>
                </div>
                <div className='newsong-inpu'>
                    <input type="text" ref="name"/>
                </div>
                <div>
                    <div className='jisuan'>jisuaninputzhi</div>
                </div>  
            </div>
        )
    }
}

export default Newsong;