function Sidebar(){
    return(       
         <div className="sidebar flex flex-col" style={{color:"lightgray"}}>
             <div id="logo-container" className="flex cursor">
                <i className="fa fa-shopping-bag" style={styles.iconSize}></i>
                <h2 style={{margin:"4px 10px",color:"white"}}>dukaan</h2>
             </div>
             <div className="menu">
                <div>
                    <i className="fa fa-home"></i>
                    Home
                </div>
                <div>
                    <i className="fa fa-rupee"></i>
                    Order
                </div>
                <div>
                    <i className="fa fa-home"></i>
                    Products
                </div>
                <div>
                    <i className="fa fa-rupee"></i>
                    Manage
                </div>
                <div>
                    <i className="fa fa-rupee"></i>
                    Plugins
                </div>
                <div>
                    <i className="fa fa-rupee"></i>
                    Pages
                </div>
                <div>
                    <i className="fa fa-rupee"></i>
                    Appearence
                </div>
                <div>
                    <i className="fa fa-rupee"></i>
                    Account
                </div>
                <div>
                    <i className="fa fa-rupee"></i>
                    Tutorials
                </div>
             </div>
                <div id="sliderbar-footer" className="cursor">
                    <div style={{fontSize:12,marginBottom:5}}>
                        Need any help?
                    </div>
                    <div style={{fontSize:14,fontWeight:"bolder"}}>
                        Chat with us
                    </div>
                </div>
            
        </div>
    );
}
const styles={
    iconSize:{
        fontSize:30
    }
}
export default Sidebar;