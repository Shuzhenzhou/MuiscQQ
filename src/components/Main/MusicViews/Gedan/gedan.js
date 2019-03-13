import React from 'react'
import $ from 'jquery'
import './gedan.css'


class Gedan extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:{}
        }
    }

    render(){ 
        console.log(this.props.location.query.id)
        return(
            <div className='gedan-out'>
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
                <section></section>
            </div>
        )
    }

    componentDidMount(){
        var _this=this;
        $.ajax({
            url:'https://api.bzqll.com/music/tencent/songList?key=579621905&id='+this.props.location.query.id,
            async:true,
            dataType:"json",
            success:function(data){
                console.log(data.data)
                _this.setState({list:data.data})
            }
        })
    }
}

export default Gedan;