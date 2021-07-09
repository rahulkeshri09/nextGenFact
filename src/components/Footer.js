function Footer(){
    return(
        <div className="footer flex" style={{fontFamily:"sans-serif"}}>
            <div style={{width:"80%",marginTop:20}}>
               <p style={styels.heading}>
                    You have 8 days left in your free trial
                </p>
                <p style={styels.para}>
                    Get dukaan premium now and take your business to new height 
                </p>
            </div>
            <div className="subscription-btn cursor">
                <div style={styels.plan}>
                    1 year plan
                </div>
                <span className="flex" style={{width:60}}>  
                    <hr style={styels.line} />
                    <span style={styels.arrow}> > </span> 
                </span>
                <div style={styels.price}>
                    <i className="fa fa-rupee"></i> 4999
                </div>
            </div>
        </div>
    )
}
const styels={
    heading:{
        fontSize:18,
        fontWeight:"bold",
        marginBottom:10
    },
    para:{
        fontSize:14,
        marginTop:0
    },
    plan:{
        fontSize:14,
        marginTop:10,
        fontWeight:"bold",
        marginBottom:10
    },
    price:{
        fontSize:16,
        fontWeight:"bold",
        marginLeft:160,
        marginTop:"-15px"
    },
    line:{
        height:3,
        backgroundColor:"white",
        width:60,
        marginLeft:0,
        border:"none",
        marginTop:0
    },
    arrow:{
        marginLeft:"-10px",
        marginTop:"-12px",
        fontSize:25,
        fontWeight:"bold"
    }
}
export default Footer;