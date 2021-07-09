function MobileHeader(){
    return(
        <div style={styles.header} className="flex flex-center">
            <i className="fa fa-shopping-bag" style={{marginRight:10}}></i>
            dukaan
        </div>
    )
}
const styles={
    header:{
        backgroundColor:"#01061f",
        height:"50px",
        width:"100vw",
        color:"lightgray",
        fontSize:20,
        position:"fixed"
    }
}
export default MobileHeader;