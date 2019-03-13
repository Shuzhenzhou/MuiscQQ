import React from 'react'
import './my.css'
import {Route,BrowserRouter as Router,NavLink,Redirect} from 'react-router-dom'
import music from "../../../../../assets/img/icon-grid-music.png"
import xiazai from "../../../../../assets/img/icon-xaizai.png"
import recent from "../../../../../assets/img/icon-record-recent.png"
import like from "../../../../../assets/img/icon-grid-favorite.png"
import payfor from "../../../../../assets/img/icon-grid-video.png"
import run from "../../../../../assets/img/icon-zanting.png"
import right from "../../../../../assets/img/icon-right.png"

class My extends React.Component{
  

    btn(e){
      //  console.log("aaaaa",e)
        window.location.href="/newsong"
    }
    render(){
        return(
            <Router>  
            <div className='myOut'> 

                <div className="center-tlogi">
                    <h3>qiangdenglu</h3>
                </div>

                <div className="center-member">
                    <ul>
                        <li>
                            <i>icon</i>
                            <div className="center-mem">
                                <h2>活动中心</h2>
                                <p>回购好礼派发中</p>
                            </div>
                        </li>

                        <li>
                            <i>icon</i>
                            <div className="center-mem">
                                <h2>会员中心</h2>
                                <p>现实7.6折开通</p>
                            </div>
                        </li>

                    </ul>
                </div>

                <div className="center-classify">
                    <ul>
                        <li>
                            <img src={music}/>
                            <h3>本地音乐</h3>
                            <i>666</i>
                        </li>
                        <li>
                            <img src={xiazai}/>
                            <h3>下载音乐</h3>
                            <i>777</i>
                        </li>
                        <li>
                            <img src={recent}/>
                            <h3>最近播放</h3>
                            <i>666</i>
                        </li>
                        <li>
                            <img src={like}/>
                            <h3>我喜欢</h3>
                            <i>666</i>
                        </li>
                        <li>
                            <img src={payfor}/>
                            <h3>已购音乐</h3>
                            <i></i>
                        </li>
                        <li>
                            <img src={run}/>
                            <h3>跑步电台</h3>
                            <i></i>
                        </li>
                    </ul>
                </div>

                <div className="center-attention">
                    <h2>我的关注</h2>
                    <ul>
                        <li>
                            <img src={run}/>
                            <div className="center-attnev">
                                <h5>1条最新音乐上架 </h5>
                                <span>以上翻译结果来自-有道神经网络翻译（NMT）,所以我恳求您的关注</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="center-song">
                  <div className="center-sonti"> 
                        <div className="center-sontileft">
                            <h2>自建歌单2</h2>
                            <strong>|</strong>
                            <span>收藏歌单</span>
                        </div>
                        <div className="center-sontiright">

                            <strong onTouchEnd={this.btn.bind(this,"aaa")}>+</strong>
                            <span>三</span>
                        </div>

                    </div>
                    <ul>
                        <li>
                            <img src={run}/>
                            <div className="center-sonlist">
                                <div className="center-sonlileft">
                                    <h5>xiznai  </h5>
                                    <span>11首</span>
                                </div>
                                <div className="center-sonliright">
                                <img src={right}/>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>



            </div>
            </Router>  
        )
    }
}
export default My;