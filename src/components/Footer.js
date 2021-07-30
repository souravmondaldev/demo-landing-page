import React from "react";

export const Footer = () => {
    let Footerstyle={width:"100%", backgroundColor:'grey'}
    return (
        <>
           <footer className = "text-center py-2" style={Footerstyle}>
            <p className = "text-center" >Copyright &copy; RKY Supermarkets </p>
           </footer>
        </>
    );
}
