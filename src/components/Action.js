var Action={
    boFang(msg){
        return{
            type:"BOFANG",
            text:msg
        }
    },
    isLogin(msg){
        return{
            type:'ISLOGIN',
            text:msg
        }
    }
}

export default Action;