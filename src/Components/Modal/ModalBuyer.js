import React from "react";
import { Button, Modal } from "react-bootstrap";
import CurrencyInput from "react-currency-input-field";
import { Link } from "react-router-dom";
import "./modalbuyer.css";

const ModalBuyer = (props) => {
    return (
        <>
            <Modal
            {...props}
                // show={props}
                className="modal-buyer"
                // dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        {/* <img src="/img/close.png" alt="" /> */}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="col-xs-12">
                        <div className="row-modal">
                            <h1>
                                Masukkan Harga Tawarmu
                            </h1>
                            <p>
                                Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu akan segera dihubungi penjual.
                            </p>
                        </div>
                        <div className="row-modal-item">

                            <div class="col-4 profile">
                                <Link to="/"><img class="" src="/img/hero.png" alt="" /></Link>
                            </div>
                            <div class="col-8 seller-name">
                                <h1>Jam Tangan Casio</h1>
                                <h4 class="price">Rp 250.000</h4>
                            </div>
                        </div>
                        <div className="input-harga my-4">
                            <h3>
                                Harga Tawar
                            </h3>
                            <CurrencyInput
                                id="input-example"
                                class="modal-input"
                                name="input-name"
                                placeholder="Please enter a number"
                                defaultValue={100}
                                decimalsLimit={2}
                                prefix='Rp. '
                                onValueChange={(value, name) => console.log(value, name)}
                            />
                            <Button className='button shadow-none button-kirim' onClick={
                                () => { props.onHide(); props.alertOnHide(); props.disableOnHide() }
                            }
                            >
                                <div className="btn-text">Kirim</div>
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalBuyer