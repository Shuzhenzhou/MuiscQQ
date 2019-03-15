import React from 'react'
import {NavLink} from 'react-router-dom'
import $ from 'jquery'
import { Carousel, WingBlank } from 'antd-mobile';
import './musichall.css'
import baner1 from '../../../../../assets/img/mu-baneer01.png'
import geshou from "../../../../../assets/img/icon-grid-singer.png"
import paihang from "../../../../../assets/img/icon-grid-categories.png"
import fenlei from "../../../../../assets/img/icon-grid-video.png"
import vidos from "../../../../../assets/img/icon-grid-video.png"
class Musichall extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data: [{imgsrc:1205517,id:'000rKCR04BJI3T'},{imgsrc:309021,id:'0010d4Ux0lChko'},{imgsrc:1205514,id:'001xYtfH2t8PRP'},{imgsrc:1187985,id:'003adWUR0MQScb'}
                ],
            imgHeight: 176,
            gedanList:[]
        }    
         
    }

    zhuanji(id){
        console.log(id)
    }
    gedan(data){
        this.props.history.push({pathname:'/gedan',query:{id:data}})
        /* $.ajax({
            url:'https://api.bzqll.com/music/tencent/songList?key=579621905&id='+id,
            async:true,
            dataType:'json',
            success:function(data){
                console.log(data)
            }
        }) */
    }

    componentDidMount(){
        
        var _this=this;   
     $.ajax({
         url:'https://api.bzqll.com/music/tencent/hotSongList?key=579621905&categoryId=10000000&sortId=3&limit=60',
         async:true,
         dataType:'json',
         success:function(data){
             console.log(data)
             _this.setState({gedanList:data.data})
         }
     })
    }

    render(){
        var _this=this;       
        return(
            <div className='Musichall-out'>
                <div className='banner'>
                    <WingBlank>
                        <Carousel
                        autoplay={false}
                        infinite
                        >
                        {this.state.data.map(val => (
                            <div key={1}>
                                <img
                                src={`//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/${val.imgsrc}.jpg?max_age=2592000`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top',height:'180px' }}
                                onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                                }} onTouchEnd={_this.zhuanji.bind(_this,val.id)}
                            />    
                            </div>                       
                                                   
                        ))}
                        </Carousel>
                    </WingBlank>
                </div>

                <div className='Musichall-nav'>
                    <div>
                        <p> <img src={geshou} className="Musichall-tubaio"/> </p>
                        <p>歌手</p>
                    </div>
                    <div>
                        <p> <img src={paihang} className="Musichall-tubaio"/></p>
                        <p>排行</p>
                    </div>
                    <div>
                        <p> <img src={fenlei} className="Musichall-tubaio"/></p>
                        <p>电台</p>
                    </div>
                    <div>
                        <p> <img src={vidos} className="Musichall-tubaio"/></p>
                        <p>视频</p>
                    </div>
                </div>

                <div className='Recommend'>
                    <h2>为你推荐</h2>
                    <div>
                        <ul>
                        {
                            this.state.gedanList.map(function(item,i){
                                return(<li key={i}>
                                    
                                        <div><img src={item.pic} onTouchEnd={_this.gedan.bind(_this,item.id)}/></div>
                                        <div>
                                            <p>{item.name}</p>
                                            <span>{item.creator}</span>
                                        </div>
                                                                     
                                </li>)
                            })
                        }
                        </ul>
                       
                    </div>

                </div>
            </div>
        )
    }

    
}
export default Musichall;