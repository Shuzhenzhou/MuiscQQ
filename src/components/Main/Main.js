import React from 'react'
import $ from 'jquery'
import './main.css'
import Stting from './Settings/setting'
import MusicView from './MusicViews/musicView'
import { nonsense } from 'antd-mobile/lib/picker';

class Main extends React.Component{
    constructor(props){
        super(props)
        this.state={
            display1: 'none',
        }
    }
    iszhan(msg){
        this.setState({display1:msg})
    }
    render(){
        return(
            <div className="mainOut" >
                <Stting iszhankai={this.state.display1}/>
                <MusicView isshow={this.iszhan.bind(this)}/>
            </div>
        )
    }

    componentDidMount(){
        
    }
}

export default Main;