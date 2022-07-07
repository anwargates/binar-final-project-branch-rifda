import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import AlertPenawaran from '../Alert/AlertPenawaran'
import './ModalsTolak.css'



const ModalsTolak = (props) => {
    const [alertShow, setAlertShow] = useState(false);
    console.log(alertShow);

    useEffect(() => {
        const clearMessage = setTimeout(() => {
            setAlertShow("");
        }, 2000);
        return () => clearTimeout(clearMessage);
      }, [alertShow]);

    return (
        <>
            <AlertPenawaran show={alertShow} onClose={() => setAlertShow(false)} />
            <Modal
                // onHide={props.onHide}
                {...props}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                dialogClassName='modal-tolak'
                centered
            >
                <Modal.Header 
                closeButton c
                lassName='modals__tolak__header'>
                </Modal.Header>
                <Modal.Body >
                    <p className='fw-bold'>Perbarui status penjualan produkmu</p>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="transaksi" id="terima" value='terima' />
                        <label class="form-check-label" for="terima" >
                            <p className='text__input__transaksi'>Berhasil Terjual</p>
                            <p className='text-muted text__input__transaksi2'>Kamu telah sepakat menjual produk kepada pembeli</p>
                        </label>
                    </div>
                    <div class="form-check ">
                        <input class="form-check-input" type="radio" name="transaksi" id="tolak" value='tolak' />
                        <label class="form-check-label" for="tolak">
                            <p className='text__input__transaksi'>Batalkan Transaksi</p>
                            <p className='text-muted text__input__transaksi2'>Kamu membatalkan transaksi produk ini dengan pembeli</p>
                        </label>
                    </div>
                    <div className='d-grid gap-0'>
                        <Button variant='dark' className='btn__kirim__' onClick={() => {
                            setAlertShow(true);
                            props.onHide();
                        }
                        }>Kirim</Button>
                    </div>
                </Modal.Body>

            </Modal>
        </>
    )
}

const handleAlert = () => {
    var hideState = this.props.onHide;
    this.props.isTolak(hideState);
}

export default ModalsTolak
