import React from 'react'
import './regist.css'
import $ from 'jquery'

class Regist extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            password:'',
            value: '',
            nickname:''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
      
    }
    backLogin(){
        this.props.history.push('/login')
    }
    //input 获取焦点 width: 100%
    inputOnFocus(){
        this.setState({ focus: true });
            //正则用//包起来
       // console.log("aa")

    }
    //input 失去焦点
    inputOnBlur(){
         this.setState({ focus: false })
   /*      var name =this.refs.name.value;
      
        var regex = /^((\+)?86|((\+)?86)?)0?1[3458]\d{9}$/; 
                    //react使用正则表达式变量的test方法进行校验，直接使用value.match(regex)显示match未定义
        if (regex.test(name)) { 
                console.log("1")  
            } else { 
                alert('请输入正确的手机号码');
            } */
        } 
    reg(){
        var name =this.refs.name.value;
        var password=this.refs.password.value;
        var sex = this.state.value;
        var nickname = this.refs.nickname.value;
            //验证手机号
        console.log(this.refs.nickname.value)
          var regex = /^((\+)?86|((\+)?86)?)0?1[3458]\d{9}$/; 
          var _this =this; 
            //react使用正则表达式变量的test方法进行校验，直接使用value.match(regex)显示match未定义
            if (regex.test(name)&&password.length>=6&nickname.length!=0){ 
                    $.ajax({
                        type:'POST',
                        url:'http://47.94.8.35/QQMusic/res.do',
                        data:{userphone:name,userpassword:password,usersex:sex,username:nickname},
                        async:true,
                        dataType:'json',
                        success:function(data){
                            console.log(data)
                            console.log(data.code)
                            if(data.code==1){
                                alert("注册成功请登录")
                                _this.props.history.push('/login')
                            }
                            if(data.code==100){
                                alert("您输入的用户名或手机号已存在")
                            }
                        }
                    })  
                } else { 
                    alert('密码必须大于六位,昵称不能为空');
                } 
     
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
                <input type="text" placeholder="请输入您的昵称" className="regist-shuru" ref='nickname'/>
                    <div className={ this.state.focus ? "dis_bottom_left_onfocus" : "dis_bottom_left" } ref="bottom_left">
                            <input type="text"
                            placeholder="请输入您的手机号"
                            className="regist-shuru" 
                            ref='name'
                            onBlur={this.inputOnBlur.bind(this)}
                            onFocus={this.inputOnFocus.bind(this)}
                            /> 
                    </div>
                        <input type="password" placeholder="请输入超过六位的密码" className="regist-shuru" ref='password'/>
                       <p>
                         <span>  男： <input type="radio" name="val"  value="1" onChange={this.handleChange}/></span>
                         <span>   女： <input type="radio" name="val" value="0" onChange={this.handleChange}/></span>
                      
                         </p>
                   
                    <div className="regist-btn-box">
                        <a className="regist-btn" onTouchEnd={this.reg.bind(this)}>注册</a>
                    </div>

                </div>
            </div>
        )
    }
}

export default Regist;