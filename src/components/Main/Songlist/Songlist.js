import React from 'react'
import './Songlist.css'
class Songlist extends React.Component{
    constructor(props){
        super(props)
    }
    btn(){
        
    }
    back(){
        window.location.href="/main/my"
    }
    render(){
        var audiocss={
            width:"100vw",
            border:'none',
            
        }
        return(
            <div className="newdongout">
            <div>
                <header className='newsong-nav'>
                    <p onTouchEnd={this.back.bind(this)}> 返回 </p>
                    <h3>歌单</h3>
                    <span onTouchEnd={this.btn.bind(this)}>sandian</span>
                </header> 
                <session>
                    <div className="songlist-centerto">
                        <div className="songlist-cenlist">
                            <div className="songlist-img">
                               
                            </div>
                            <div className="songlist-content">
                              {/*   <h2>{this.props.location.query.name}</h2>  */}
                              <h2>歌单</h2>
                              <div className="loginhou">用户</div>
                              <span>编辑简介&gt;</span>
                            </div>
                        </div>
                        <div className="songlist-list">
                            <ul>
                                <li>
                                    <i>aa</i>
                                    <span>收藏</span>
                                </li>
                                <li>
                                    <i>aa</i>
                                    <span>评论</span>
                                </li>
                                <li>
                                    <i>aa</i>
                                    <span>分享</span>
                                </li>
                            </ul>
                        </div>
                    </div> 

                    <div className="songlist-add">
                       <p>歌单里面没有歌曲</p>
                       <p>你可以挑加一些歌曲添加到这里</p> 
                       <button>添加歌曲</button>
                    </div> 
                </session>
                <footer>
                    <div className='audio-out'>
                        <audio src='https://api.hibai.cn/music/Music/Music?id=286510&type=url' style={audiocss} controls></audio>
                    </div>
                </footer>
                                                                                                                                                              
            </div>
         </div>
        )
    }
}
export default Songlist; 