import React from "react";

export const Card = () => {
    return (
        <>
            <div className="card-group">
                <div className="card mx-3 border border-secondary my-3">
                    <img src="https://www.javatpoint.com/images/nature-1.jpg" className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title">User Management</h5>
                        <p className="card-text">Enter here to manage user, store and regions details. </p>
                        <button type="button" class="btn btn-primary btn-sm">Manage</button>
                    </div>
        
                </div>
                <div className="card mx-3 border border-secondary my-3" >
                    <img src="https://www.javatpoint.com/images/nature-1.jpg" className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title">Customer Management</h5>
                        <p className="card-text">Enter Here to Manage Customer details</p>
                        <button type="button" class="btn btn-primary btn-sm">Manage</button>
                    </div>
                    {/* <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div> */}
                </div>
                <div className="card mx-3 border border-secondary my-3">
                    <img src="https://www.javatpoint.com/images/nature-1.jpg" className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title">Product Management</h5>
                        <p className="card-text"> Enter here to manage Product details</p>
                        <button type="button" class="btn btn-primary btn-sm">Manage</button>
                    </div>
    
                </div>
                <div className="card mx-3 border border-secondary my-3">
                    <img src="https://www.javatpoint.com/images/nature-1.jpg" className="card-img-top" alt="..." />
                    <div className="card-body text-center ">
                        <h5 className="card-title">Order Management</h5>
                        <p className="card-text">Enter here to manage order details</p>
                        <button type="button" class="btn btn-primary btn-sm text-center ">Manage</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
