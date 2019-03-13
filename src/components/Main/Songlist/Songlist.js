import React from 'react'
import img1 from"../../../assets/img/loginbj.png"

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
        return(
            <div className="newdongout">
                <header className='newsong-nav'>
                    <p onTouchEnd={this.back.bind(this)}> 返回 </p>
                    <h3>歌单</h3>
                    <span onTouchEnd={this.btn.bind(this)}>sandian</span>
                </header> 
                <session>
                    <div className="songlist-centerto">
                        <div className="songlist-cenlist">
                            <div className="songlist-img">
                                <img src={img1}/> 
                            </div>
                            <div className="songlist-content">
                                <h2>歌单名和上一页一样</h2>
                                
                            </div>
                        </div>
                    </div> 

                    <div>
                        
                    </div> 
                </session>
                <footer>

                </footer>
                                                                                                                                                              
            </div>
        )
    }
}
export default Songlist; 