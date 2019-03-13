import React from 'react'
import $ from 'jquery'
import IScroll from 'iscroll'
import './gedan.css'
import Store from '../../../Store'
import Reducer from '../../../Reducer';
import Action from '../../../Action'



class Gedan extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:{},
            songs:[],
            gequid:''
        }
    }

    buofang(id){
     
        Store.dispatch(Action.boFang(id))
    }
    changeItem(){
        this.setState({gequid:Store.getState().bofangge})
    }

    render(){
        console.log(this.state.gequid)
         var _this=this;
        return(
            <div className='gedan-out'>
            <div className='kehua'>
                <div className='gedan-head'>
                    <div className='gedan-head-top'>
                        <div>&lt;</div>
                        <div>歌单</div>
                        <div>...</div>
                    </div>
                    <div className='gedan-head-middle'>
                        <div><img src={this.state.list.logo}/></div>
                        <div className='gedan-head-middle-miaoshu'>
                            <div>{this.state.list.title}</div>
                            <div>{this.state.list.author}</div>
                        </div>              
                    </div>
                    <div className='gedan-head-bottom'>
                        <span>收藏</span>
                    </div>
                </div>
                <section>
                    <ul className='gequ'>
                        {
                            this.state.songs.map((item,i)=>{
                                return(
                                    <li key={i}>
                                        <div className='gequ-l' onTouchEnd={_this.buofang.bind(_this,item.id)}>
                                            <p>{item.name}</p>
                                            <p className='name'>{item.singer}</p>
                                        </div>
                                        <div className="gequ-r">
                                            收藏
                                        </div>                                      
                                    </li>
                                )
                            })
                        } 
                    </ul>
                </section>
                </div>
            </div>
        )
    }

    componentDidMount(){
        Store.subscribe(this.changeItem)
            var myIscroll=new IScroll('.gedan-out',{})
            console.log(myIscroll.maxScrollY);
           /*  $(document).on('touchend',function(){
                
                if(myIscroll.y>50){
                    console.log('下拉刷新')
                }
                if(myIscroll.y < myIscroll.maxScrollY-50){
                    console.log('上拉加载')
                    
                }
            }) */
            myIscroll.refresh();

        var _this=this;
        $.ajax({
            url:'https://api.bzqll.com/music/tencent/songList?key=579621905&id='+this.props.location.query.id,
            async:true,
            dataType:"json",
            success:function(data){
                
                console.log(data.data)
                _this.setState({list:data.data,songs:data.data.songs})
            }
        })
    }
}

export default Gedan;