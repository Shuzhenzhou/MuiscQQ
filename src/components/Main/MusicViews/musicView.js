import React from 'react'
import { Toast } from 'antd-mobile';
import $ from 'jquery'
import Action from '../../Action'
import {Route,BrowserRouter as Router,NavLink,Redirect} from 'react-router-dom'
import { SearchBar, Button, WhiteSpace, WingBlank} from 'antd-mobile';
import Store from '../../Store'
import IScroll from 'iscroll'
import './musicView.css'
import My from './section/My/my'
import Musichall from './section/MusicHall/musichall'
import Discover from './section/Discover/discover'

import Gedan from './Gedan/gedan';


class MusicView extends React.Component{
    constructor(props){
        super(props)
        this.state={
            iszhan:'none',
            isshowyc:'none',
            gequid:Store.getState().bofangge,
            value:'',
            list:[],
            issou:'none'
            
        }
        this.changeItem=this.changeItem.bind(this) 
    }
    onChange= (value) => {
        if(value){
            this.setState({issou:'block'})
        }else{
            this.setState({issou:'none'})
        }
        this.setState({ value },function(){
            var _this=this;
            $.ajax({
                url:'https://api.bzqll.com/music/tencent/search?key=579621905&s='+value+'&limit=14&offset=0&type=song',
                async:true,
                dataType:"json",
                success:function(data){
                    console.log(data.data)
                    _this.setState({list:data.data})
                }
            })
        });       
      }
      bofang(id){
        Store.dispatch(Action.boFang(id))
    }

    zhan(){
        this.setState({iszhan:"block",isshowyc:'block'},function(){
            this.props.isshow(this.state.iszhan)
        })
    }
    isshow(){
        this.setState({iszhan:"none",isshowyc:'none'},function(){
            this.props.isshow(this.state.iszhan)
        });
        
    }
    changeItem(){
        this.setState({gequid:Store.getState().bofangge})
    }

    shouchang(id){
        console.log(id)
        if(Store.getState().islogin.length!=0){
            $.ajax({
                url:'http://47.94.8.35/QQMusic/netadd.do',
                async:true,
                data:{uid:Store.getState().islogin,sid:id},
                dataType:'json',
                success:function(data){
                    console.log(data)
                }
            })
        }else{
            Toast.info('未登陆请先登陆', 1);
        }
        
    }


    componentDidMount(){
        
    //     var _this=this;
        
    //     Store.subscribe(this.changeItem)
    //     var myIscroll=new IScroll('section',{})
    //    /*  $(document).on('touchend',function(){
            
    //         if(myIscroll.y>50){
    //             console.log('下拉刷新')
    //         }
    //         if(myIscroll.y < myIscroll.maxScrollY-50){
    //             console.log('上拉加载')
                
    //         }
    //     }) */
    //     myIscroll.refresh();

        
        
    }

    
    render(){
        
        var isyc={
            display:this.state.isshowyc,
        }
        var audiocss={
            width:"100vw",
            border:'none',
            
        }
        var ischu={
            display:this.state.issou
        }
        
        return(
            <Router>           
            <div className='musicView-out'>
                <div className='yincang' style={isyc} onClick={this.isshow.bind(this)}></div>
                
                <div>
                    <Route path='/gedan' component={Gedan}></Route>
                </div>                                                   
                <header>
                    <div className='musicView-head-top'>
                        {/* <div className='musicView-head-left' onClick={this.zhan.bind(this)}>三</div>
                        <div className='musicView-head-nva'>我的</div>
                        <div className='musicView-head-nva'>音乐馆</div>
                        <div className='musicView-head-nva'>发现</div> */}

                        <div className='musicView-head-left' onClick={this.zhan.bind(this)}>三</div>
                        <div className='musicView-head-nva'>
                        <NavLink to={'/main/my'}>我的</NavLink>
                        </div>
                        <div className='musicView-head-nva'>
                            <NavLink to={'/main/musichall'}>音乐馆</NavLink>
                        </div>
                        <div className='musicView-head-nva'>
                            <NavLink to={'/main/discover'}>发现</NavLink>
                        </div>
                        <div className='musicView-head-right'>＋</div>
                    </div>
                    <div className='musicView-search'>

                    <SearchBar
                         value={this.state.value}
                         placeholder="Search"
                         onChange={this.onChange}
                    />
                    <WhiteSpace />
                    </div> 
                </header>
                <section>

                <div className='sectionBox'>
                    <div className='sousoqu' style={ischu}>
                        <ul>
                            {
                                this.state.list.map((item,i)=>{
                                    return(<li key={i} onTouchEnd={this.bofang.bind(this,item.url)}>
                                        <span>{item.name}</span>
                                        <span>{item.singer}</span>
                                        <span className='shouchang' onTouchEnd={this.shouchang.bind(this)}>收藏</span>
                                    </li>)
                                    
                                })
                            }
                        </ul>
                    </div>                                             
                    <Route path='/main/my' component={My}></Route>
                    <Route path='/main/musichall' component={Musichall}></Route>
                    <Route path='/main/discover' component={Discover}></Route>
                    <Redirect to='/main/my'/>                                                             
                </div>
                
                </section>
                
                <footer>
                    <div className='audio-out'>
                        <audio src={this.state.gequid} autoplay="autoplay" controls></audio>           
                    </div>
                </footer>
            </div>
            </Router>
        )

        
    }
    

    
}
export default MusicView;