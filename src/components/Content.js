function Content(){
    return(
        <div id="parent-content" style={{backgroundColor:"lightgray"}}>
            <div className="content-container">
                <div className="heading">
                    <h2>
                        Finish your store setup 
                    </h2>
                    <p>
                        Sellers who add more 25 products are likely to get more orders.Add all your products to your e-commerce store now
                    </p>
                </div>
                <div className="flex">
                    <div className="completed-sign flex flex-col">
                        <div>
                            <i className="fa fa-check"></i>
                        </div>
                        <span className="line"></span>
                        <div>
                            <i className="fa fa-check"></i>
                        </div>
                        <span className="line"></span>
                        <div>
                            <i className="fa fa-check"></i>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="completed-container">
                            <p className="heading-completed-sign">
                                Your e-commerce store is ready
                            </p>
                            <p className="paragraph-completed-sign">
                                congratulation your e-commerce store is live
                            </p>
                            <p className="view-store-btn">
                                <u>Visit store</u>
                            </p>
                        </div>
                        <div className="completed-container">
                        <p className="heading-completed-sign">
                            Your e-commerce store is ready
                        </p>
                        <p className="paragraph-completed-sign">
                            congratulation your e-commerce store is live
                        </p>
                        <p className="view-store-btn">
                            <u>Visit store</u>
                        </p>
                        </div>
                        <div className="completed-container">
                            <p className="heading-completed-sign">
                                Your e-commerce store is ready
                            </p>
                            <p className="paragraph-completed-sign">
                                congratulation your e-commerce store is live
                            </p>
                            <p className="view-store-btn">
                                <u>Visit store</u>
                            </p>
                        </div>
                    </div>
                </div>
                <button className="add-address cursor">
                    Add store address
                </button>
                <div>
             </div>
        </div>
        </div>
    )
}

export default Content;