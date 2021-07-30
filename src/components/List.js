import React from "react";

export const List = () => {
    //let FooterStyle={width:"20%", backgroundColor:'grey', textAlign: 'right'}
    return (
        <>
            <div className="btn-group my-4" role="group" aria-label="Basic outlined example"   >
            <button type="button" class="btn btn-outline-secondary mx-3" >Search By Time</button>
                <button type="button" class="btn btn-outline-primary mx-1" >Today</button>
                <button type="button" class="btn btn-outline-primary mx-1">This Week</button>
                <button type="button" class="btn btn-outline-primary mx-1">This Month</button>
                <button type="button" class="btn btn-outline-primary mx-1">This Year</button>
            </div>
        </>
    );
}

