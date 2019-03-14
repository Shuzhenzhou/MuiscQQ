import React from 'react'
import { Toast } from 'antd-mobile';
import Store from '../Store'
import Action from '../Action'
import $ from 'jquery'
import './Login.css'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:Store.getState().islogin,
            
        }
        this.changeItem=this.changeItem.bind(this)
        
    }
    changeItem(){
        this.setState({username:Store.getState().islogin})
    }
    rightLink(){
        this.props.history.push('/regist');
        
        $.ajax({
            url:'http://47.94.8.35/QQMusic/getsession.do',
            async:true,
            dataType:'json',
            success:function(data){
                console.log(data)
            }
        })
       
    }

    loginLink(){
       //console.log(this.refs.name.value)
       var _this=this;
       var name =this.refs.name.value;
       var password=this.refs.password.value;
       console.log(name,password)
       if(name.length !=0 && password!=0){
            $.ajax({
                type:'post',
                url:'http://47.94.8.35/QQMusic/login.do',
                data:{name:name,password:password},
                async:true,
                dataType:'json',
                success:function(data){
                    console.log(data)
                    if(data.code==1){
                        Toast.success('登陆成功', 1);
                        Store.dispatch(Action.isLogin(name))
                        setTimeout(function(){
                            _this.props.history.push('/main')
                        },1000)
                      /*   $.ajax({
                                url:'http://47.94.8.35/QQMusic/getsession.do',
                                data:{name:name,password:password},
                                async:true,
                                dataType:'json',
                                success:function(data){
                                    console.log(data)
                                }        
                            }) */
                        
                    }else{
                        Toast.offline('密码或账号错误，请重试', 1);
                    }
                    
                }
            })
       }else{
        Toast.offline('请正确输入账户和密码', 1);
       }
        
    }
    render(){
        return(
            <div className="login">
                <div className="loginBox">
                    <div>
                        <input type="text" placeholder="请输入账号" className="login-shuru" ref='name'/>
                        <input type="password" placeholder="请输入密码" className="login-shuru" ref='password'/>
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
        Store.subscribe(this.changeItem)
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