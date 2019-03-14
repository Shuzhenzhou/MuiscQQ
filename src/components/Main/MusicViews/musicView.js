import React from 'react'
import $ from 'jquery'
import {Route,BrowserRouter as Router,NavLink,Redirect} from 'react-router-dom'
import { SearchBar, Button, WhiteSpace, WingBlank} from 'antd-mobile';
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
            isshowyc:'none'
            
        }
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
    render(){
        var isyc={
            display:this.state.isshowyc,
        }
        var audiocss={
            width:"100vw",
            border:'none',
            
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
                    <SearchBar placeholder="搜索"/>
                    <WhiteSpace />
                    </div> 
                </header>
                <section>
                                                                      
                <div className='sectionBox'>
                                                                           

                    <Route path='/main/my' component={My}></Route>
                    <Route path='/main/musichall' component={Musichall}></Route>
                    <Route path='/main/discover' component={Discover}></Route>
                    <Redirect to='/main/my'/>                                                             
                </div>
                
                </section>
                
                <footer>
                    <div className='audio-out'>
                        <audio src='https://api.hibai.cn/music/Music/Music?id=286510&type=url' style={audiocss} controls></audio>
                    </div>
                </footer>
            </div>
            </Router>
        )
                    }
    componentDidMount(){
        var myIscroll=new IScroll('section',{})

        $(document).on('touchend',function(){        

       /*  $(document).on('touchend',function(){
            
            if(myIscroll.y>50){
                console.log('下拉刷新')
            }
            if(myIscroll.y < myIscroll.maxScrollY-50){
                console.log('上拉加载')
            }
        }) */
        myIscroll.refresh();
        
    }  )

}

}
export default MusicView;