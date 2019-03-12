import React from 'react'
import './stting.css'
import { List, Switch ,Toast, WhiteSpace, WingBlank, Button} from 'antd-mobile';


function successToast() {
    Toast.success('已开启仅WiFi联网，请放心使用', 1);
  }
function failToast() {
    Toast.fail('已关闭仅WiFi联网，请注意您的流量', 1);
  }
function showToastNoMask() {
    Toast.info('流量提醒已关闭!!!', 1, null, false)
  }
  
class Setting extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            checked: false,
            checked1: true,
            checked2: true,
            checked3: true,
          }
    }

    render(){
        console.log(this.props.iszhankai)
        var zk={
            display: this.props.iszhankai,
        }
        return(
            <div className="settingOut" style={zk}>
                <div className="set-top"></div>
                <div className="set-content">
                    <ul className="set-cont">
                        <li>个性装扮  <span>默认套装</span></li>
                        <li>消息中心</li>
                        <li>免流向服务  <span>。</span></li>
                    </ul>
                    <div className="set-cont">
                            <List renderHeader={() => ''}>
                                <List.Item
                                    extra={<Switch
                                        checked={this.state.checked}
                                        onChange={() => {
                                       

                                        }}
                                       />}
                                   >定时关闭</List.Item>
                                    
                                <List.Item
                                    extra={<Switch
                                        checked={this.state.checked1}
                                        onChange={() => {
                                        this.setState({
                                            checked1: !this.state.checked1,
                                        });
                                      
                                        if(this.state.checked1){
                                            failToast()
                                        }else{
                                            successToast()
                                        }
                                        }}
                                    />}
                                     >仅wifi-Fi联网</List.Item>
                                <List.Item
                                    extra={<Switch
                                        checked={this.state.checked2}
                                        onChange={() => {
                                        this.setState({
                                            checked2: !this.state.checked2,
                                        });
                                        if(this.state.checked2){
                                            showToastNoMask()
                                        }
                                        }}
                                    />}
                                    >流量提醒</List.Item>
                                <List.Item>听歌偏好</List.Item>
                            </List>
                            
 
                    </div>
                    <ul className="set-cont3">
                        <li>微云音乐网盘</li>
                        <li>清理占用空间</li>
                        <li>帮助与反馈</li>
                        <li>关于qq音乐</li>
                    </ul>
                </div>
               <div className="set-bottom">
                   <div><span>a</span>设置</div>
                   <div><span>a</span>关闭</div>
                   </div>
            </div>
        )
    }
    componentDidMount(){

    }
}


export default Setting;