import React from 'react'
import './regist.css'
import $ from 'jquery'

class Regist extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            password:'',
        }
    }
    backLogin(){
        this.props.history.push('/login')
    }
    //input 获取焦点 width: 100%
    inputOnFocus(){
        this.setState({ focus: true });
          
            //正则用//包起来
      console.log("aa")
            

    }
    //input 失去焦点
    inputOnBlur(){
        this.setState({ focus: false })
        var name =this.refs.name.value;
        var regex = /^((\+)?86|((\+)?86)?)0?1[3458]\d{9}$/; 
                    //react使用正则表达式变量的test方法进行校验，直接使用value.match(regex)显示match未定义
        if (regex.test(name)) { 
                console.log("1")  
            } else { 
                alert('请输入正确的手机号码！');
            }
        }
    reg(){
       
        var name =this.refs.name.value;
        var password=this.refs.password.value;
        
            //验证手机号
    
      /*   $.ajax({
            type:'POST',
            url:'http://47.94.8.35/QQMusic/res.do',
            data:{name:name,password:password},
            async:true,
            dataType:'json',
            success:function(data){
                console.log(data)
                console.log(data.code)
                if(data.code==1){
                    this.props.history.push('/login')
                }

            }
        })   */
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
                <div className={ this.state.focus ? "dis_bottom_left_onfocus" : "dis_bottom_left" } ref="bottom_left">
                        <input type="text"
                         placeholder="请输入账号"
                        className="regist-shuru" 
                        ref='name'
                        onBlur={this.inputOnBlur.bind(this)}
                        onFocus={this.inputOnFocus.bind(this)}
                        />
                        <input type="password" placeholder="请输入密码" className="regist-shuru" ref='password'/>
                    </div>
                    <div className="regist-btn-box">
                        <a className="regist-btn" onTouchEnd={this.reg.bind(this)}>注册</a>
                    </div>

                </div>
            </div>
        )
    }
}

export default Regist;