import React from 'react'
import './Newsong.css'
import {Route,BrowserRouter as Router,NavLink,Redirect} from 'react-router-dom'
import Songlist from '../Main/Songlist/Songlist';

class Newsong extends React.Component{
    constructor(props){
        super(props)
    }
    btn(){
        window.location.href='/songlist'
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
                    <input type="text"/>
                </div>
                <div>
                    <div className='jisuan'>jisuaninputzhi</div>
                </div>
                
            </div>
        )
    }
}

export default Newsong;