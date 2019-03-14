var IsLogin=((state="",action)=>{
    switch (action.type) {
        case 'ISLOGIN':
            let name=action.text;
            return name;
    
        default:
           return state;
    }
})

export default IsLogin;