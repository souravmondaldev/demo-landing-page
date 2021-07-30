import React from "react";

export const Summary = () => {
    let Footerstyle = { width: "100%", backgroundColor: 'grey' }
    return (
        <>

            <div className="col-md-6 form-group mx-2 my-2">
                <h6>New Member Added To SKY Family : <span class="badge bg-secondary rx-2">8</span></h6>
            </div>
            <div className="col-md-6 form-group mx-2 my-2">
                <h6>New Customer added : <span class="badge bg-secondary ">126</span></h6>
            </div>
            <div className="col-md-6 form-group mx-2 my-2">
                <h6>New Product Added : <span class="badge bg-secondary">23</span></h6>
            </div>
            <div className="col-md-6 form-group mx-2 my-2">
                <h6>New Store Added : <span class="badge bg-secondary">1</span></h6>
            </div>
            <div className="col-md-6 form-group mx-2 my-2">
                <h6>Total Number Of Orders : <span class="badge bg-secondary">6855</span></h6>
            </div>
        </>
    );
}



