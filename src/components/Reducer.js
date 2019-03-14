import {combineReducers} from 'redux';//combineReducers用来拆分的
import BoFang from './BoFang'
import IsLogin from './isLogin';



const Reducer=combineReducers({
    bofangge:BoFang,
    islogin:IsLogin
})

export default Reducer;