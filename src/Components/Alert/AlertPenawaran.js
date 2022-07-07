import React, { useEffect, useState } from "react"
import { Alert } from "react-bootstrap";
// import "./AlertPenawaran.css"


const AlertPenawaran = (props) => {
    return (
        <>
            <Alert
                className='cust-alert'
                show={props.show}
                variant="success"
                onClose={props.onClose}
                dismissible>
                <p>
                    Harga tawarmu berhasil dikirim ke penjual
                </p>
            </Alert>
        </>
    )
}

export default AlertPenawaran;