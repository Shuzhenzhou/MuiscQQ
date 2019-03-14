import React from 'react'
import './Nowshow.css'
import music from "../../../assets/img/icon-bofang.png"
import musicnow from "../../../assets/img/icon-music-pause.png"

class Nowshow extends React.Component{
    constructor(props){
        super(props)
    }
    back(){
        window.location.href="/main/my"
    }
    btn(){

    }
    del(){

    }
    render(){
        var audiocss={
            width:"100vw",
            border:'none',
            
        }
        return(
            <div className="nowshowOut">
                
                <header className='nowshow-nav'>
                    <p onTouchEnd={this.back.bind(this)}> 返回 </p>
                    <h3>最近播放</h3>
                    <span onTouchEnd={this.btn.bind(this)}>设置</span>
                </header> 
                
                <section> 
                   
                        <div  className="nowshow-body">
                            <i>icon</i>
                            <h2>全部播放</h2> 
                            <b>下载</b>  
                        </div>   
                        <div className="nowshow-list">
                            <ul>
                                <li>
                                    <div className="nowshow-soname">
                                        <h2>歌曲名字</h2>
                                        <p>歌曲详情你你你inin咦死你你你  咪咪咪咪咪咪咪咪咪</p>
                                    </div> 
                                    <div className="nowshow-bofang">
                                    <img src={music}/>
                                    <img src={musicnow}/>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='nowshow-del'>
                                <button onTouchEnd={this.del.bind(this)}>清空全部播放记录</button>
                        </div>
                </section>
                <footer>
                    <div className='nowshow-out'>
                        <audio src='https://api.hibai.cn/music/Music/Music?id=286510&type=url' style={audiocss} controls></audio>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Nowshow;
