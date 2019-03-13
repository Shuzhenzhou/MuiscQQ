import React from 'react'
import $ from 'jquery'
import './Login.css'

class Login extends React.Component{
    constructor(props){
        super(props)
    }
    rightLink(){
        this.props.history.push('/regist')
    }
    loginLink(){
        this.props.history.push('/main')
        /* $.ajax({
            type:'POST',
            url:'http://47.94.8.35/QQMusic/getsession.do',
            async:true,
            dataType:'json',
            success:function(data){
                console.log(data)
            }
        }) */
    }
    login(){
        
    }
    render(){
        return(
            <div className="login">
                <div className="loginBox">
                    <div>
                        <input type="text" placeholder="请输入账号" className="login-shuru"/>
                        <input type="password" placeholder="请输入密码" className="login-shuru"/>
                    </div>
                    <div className='login-btn-box'>
                        <a className="login-btn" onClick={this.loginLink.bind(this)}>登陆</a>
                        <a className="login-btn" onClick={this.rightLink.bind(this)}>注册</a>
                    </div>

                </div>
            </div>
        )
    }

    componentDidMount(){
       /*  $.ajax({
            type:'get',
            url:'http://47.94.8.35/QQMusic/login.do',
            data:{name:12345678912,password:123456},
            async:true,
            dataType:'json',
            success:function(data){
                console.log(data)
            }
        }) */
    }
}



export default Login;