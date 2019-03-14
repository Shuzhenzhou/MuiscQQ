import React from 'react'
import $ from 'jquery'
import "./Discover.css"
import music from "../../../../../assets/img/icon-music-pause.png"
class Discover extends React.Component{
    constructor(props){
        super(props)
        this.state={
            vidowshow:[]
        }
    }
    

    render(){

        var _this=this
        return(
            <div className="discoverOut">
                <ul>
              {
                        this.state.vidowshow.map(function(item,i){
                            return(
                                <li key={i}>
                                <div className="discover-tit">
                                <img src={item.pic}/>
                                <h2 >{item.singer}</h2>
                                </div>
                                <div  className="discover-detail">
                                    <p>{item.name}</p>
                                </div>      
                                <div  className="discover-audio">
                                <video src={item.url} controls></video>
                                </div>    
                            </li>
                            )
                        })
                    } 
                 {/*    <li>
                        <div className="discover-tit">
                        <img src={music}/>
                        <h2>去谈上课很低很低和WiFi你弟弟玩我ID回我我很低很低我还覅我hi的hi我 </h2>
                        </div>
                        <div  className="discover-detail">
                            <p>aaaaaaa</p>
                        </div>      
                        <div  className="discover-audio">
                        <video src='https://api.bzqll.com/music/netease/mvUrl?id=10848831&key=579621905' controls></video>
                        </div>    
                    </li> */}
                </ul>
            </div>
        )

    }
   /*  componentDidMount(){
        var _this=this;
    
     $.ajax({
         url:'https://api.bzqll.com/music/tencent/hotSongList?key=579621905&categoryId=10000000&sortId=3&limit=60',
         async:true,
         dataType:'json',
         success:function(data){
             console.log(data.data)
             _this.setState({gedanList:data.data})
         }
     })
    } */
    componentDidMount(){
        var _this=this;
        $.ajax({
            url:'https://api.bzqll.com/music/netease/topMvList?key=579621905&limit=10&offset=0',
            async:true,
            dataType:'json',
            success:function(data){
                console.log(data.data)
                _this.setState({vidowshow:data.data})
            }
        })

    }
}
export default Discover;