import React from 'react'
import './regist.css'

class Regist extends React.Component{
    constructor(props){
        super(props)
    }
    backLogin(){
        this.props.history.push('/login')
    }
    render(){
        return(
            <div className="regist">
                <header>
                    <a className="regist-head" onClick={this.backLogin.bind(this)}>
                        <span>&lt;</span>&nbsp; 返回
                    </a>                   
                </header>
                <div className="registBox">
                    <div>
                        <input type="text" placeholder="请输入账号" className="regist-shuru"/>
                        <input type="password" placeholder="请输入密码" className="regist-shuru"/>
                    </div>
                    <div className="regist-btn-box">
                        <a className="regist-btn">注册</a>
                    </div>

                </div>
            </div>
        )
    }
}

export default Regist;