import React from 'react'
import './Ilike.css'
import music from "../../../assets/img/icon-bofang.png"
import musicnow from "../../../assets/img/icon-music-pause.png"

class Ilike extends React.Component{
    constructor(props){
        super(props)
    }
    back(){
        window.location.href="/main/my"
    }
    btn(){

    }
    render(){
        var audiocss={
            width:"100vw",
            border:'none',
            
        }
        return(
            <div className="IlikeOut">
                
                <header className='ilike-nav'>
                    <p onTouchEnd={this.back.bind(this)}> 返回 </p>
                    <h3>我喜欢</h3>
                    <span onTouchEnd={this.btn.bind(this)}>sandian</span>
                </header> 
                
                <section className="ilike-section"> 
                   
                        <div  className="ilike-body">
                            <i>icon</i>
                            <h2>全部播放</h2> 
                            <b>下载</b>  
                        </div>   
                        <div className="ilike-list">
                            <ul>
                                <li>
                                    <div className="ilike-soname">
                                        <h2>歌曲名字</h2>
                                        <p>歌曲详情你你你inin咦死你你你  咪咪咪咪咪咪咪咪咪</p>
                                    </div> 
                                    <div className="ilike-bofang">
                                    <img src={music}/>
                                    <img src={musicnow}/>
                                    </div>
                                </li>
                            </ul>
                        </div>
                </section>

                <footer>
                    <div className='audio-out'>
                        <audio src='https://api.hibai.cn/music/Music/Music?id=286510&type=url' style={audiocss} controls></audio>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Ilike;
