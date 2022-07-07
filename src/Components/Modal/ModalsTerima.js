import React from "react";
import "./ModalsTerima.css";
import { Modal, Button, Card, Row, Col } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";

const ModalsTerima = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        dialogClassName="modal-terima"
        centered
      >
      <Modal.Header closeButton className="border-0"></Modal.Header>
        <Modal.Body>
          <p className=" fw-bold">
            Yeay kamu berhasil mendapat harga yang sesuai
          </p>
          <p className="text__modals__send">
            Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya
          </p>
          <div>
            <Card className="card__modals__terima">
              <Card.Body>
                <Row>
                  <Col lg={12} className="d-flex justify-content-center fs-4">
                    <p className="fw-bold">Produk Match</p>
                  </Col>
                  <Col lg={3} md={3} sm={2}>
                    <img
                      alt=""
                      src="./Img/profile.png"
                      className="mx-auto img__modals__profil"
                    />
                  </Col>
                  <Col lg={9} md={9} sm={10} className="">
                    <p className="fw-bolder texts__modals__send">
                      Nama Pembeli
                    </p>
                    <p className="text-muted text__modals__send">Kota</p>
                  </Col>
                  <Col lg={3} md={3} sm={2} className="mt-2">
                    <img
                      alt=""
                      src="./Img/jam.svg"
                      className="mx-auto img__modals__profil"
                    />
                  </Col>
                  <Col lg={9} md={9} sm={10} className="mt-2">
                    <p className="texts__modals__send">Jam Tangan Casio</p>
                    <p className="text__modals__send">
                      <strike>Rp. 250.000</strike>
                    </p>
                    <p className="text__modals__send">Rp. 200.000</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
          <div className="d-grid gap-0 mt-3">
            <Button
              onClick={props.onHide}
              variant="dark"
              className="btn__send__wa"
            >
              Hubungi via Whatsapp <FaWhatsapp className="" />
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalsTerima;
