var BoFang=((state="https://api.bzqll.com/music/tencent/url?id=003e9fTR3Wo7zI&key=579621905",action)=>{
    switch (action.type) {
        case 'BOFANG':
            let name=action.text;
            return name;
    
        default:
           return state;
    }
})

export default BoFang;