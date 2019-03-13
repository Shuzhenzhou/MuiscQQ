var BoFang=((state='',action)=>{
    switch (action.type) {
        case 'BOFANG':
            let name=action.text;
            return name;
    
        default:
           return state;
    }
})

export default BoFang;