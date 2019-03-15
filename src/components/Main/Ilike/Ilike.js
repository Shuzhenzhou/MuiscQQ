import React from 'react'
import $ from 'jquery'
import Store from '../../Store'
import Action from '../../Action'
import './Ilike.css'
import music from "../../../assets/img/icon-bofang.png"
import musicnow from "../../../assets/img/icon-music-pause.png"

class Ilike extends React.Component{
    constructor(props){
        super(props)
        this.state={
            id:Store.getState().islogin,
            url:''
        }
    }
    back(){
        window.location.href="/main/my"
    }
    bofang(id){
        window.location.href="/main/my"
        Store.dispatch(Action.boFang(id))
    }
    del(){

    }
    btn(){

    }
    render(){
        var _this=this;
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
                                    <div className="ilike-soname" onTouchEnd={_this.bofang.bind(_this)}>
                                        <h2>歌曲名字</h2>
                                        <p>歌曲详情你你你inin咦死你你你  咪咪咪咪咪咪咪咪咪</p>
                                    </div> 
                                    <div className="ilike-bofang">
                                    <img src={music}/>
                                    <span onTouchEnd={_this.del.bind(_this)}>删除</span>
                                    
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
    componentDidMount(){
        console.log(this.props.location.search)
        var id=this.props.location.search;
        var str=id.toString();
        var uid=Number(str.substring(5))

        

        console.log(uid)
        $.ajax({
            url:'http://47.94.8.35/QQMusic/netquery.do',
            async:true,
            data:{uid:uid},
            dataType:'json',
            success:function(data){
                console.log(data)
            }
        })
    }
}

export default Ilike;
