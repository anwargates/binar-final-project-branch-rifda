import React from "react";
import { Alert } from "react-bootstrap";
import "./alertbuyer.css";



const AlertBuyer = (props) => {
    return (
        <>
            <Alert
                {...props}
                className='cust-alert'
                variant="success"
                dismissible>
                <p>
                    Harga tawarmu berhasil dikirim ke penjual
                </p>
            </Alert>
        </>
    )
}

export default AlertBuyer;