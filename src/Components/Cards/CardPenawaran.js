import React, { useState } from "react";
import "./CardPenawaran.css";
import { Card, Row, Col, Button } from "react-bootstrap";
import ModalsTerima from "../Modal/ModalsTerima";
import ModalsTolak from "../Modal/ModalsTolak";

const CardPenawaran = () => {
  const [terima, setTerima] = useState(false);
  const [tolak, setTolak] = useState(false);

  return (
    <>
      <Card className="card__penawaran mx-auto">
        <Row className="wrapper__ g-0">
          <Col xl={2} lg={2} md={2} sm={2} className="d-block">
            <Card.Img
              src="./Img/jam.svg"
              alt=""
              style={{ width: 60 }}
              className="d-flex justify-content-center "
            />
          </Col>
          <Col
            lg={10}
            md={10}
            sm={10}
            xs={8}
            className="wrapper__body__penawaran mx-auto"
          >
            <div className="d-flex justify-content-between para">
              <p className="fw-light text-muted">Penawaran Produk</p>
              <p className="fw-light text-muted">20 Apr, 14:04</p>
            </div>
            <div className="para__h6">
              <h6 className="fw-bold">Jam Tangan</h6>
              <h6 className="fw-bold">Rp. 250.000</h6>
              <h6 className="fw-bold">Ditawar Rp. 200.000</h6>
            </div>
          </Col>
          <Col sm={12} md={12} lg={12} className="wrapper__button__penawaran">
            <Button 
              variant={"outline-dark"}
              className="btn__penawaran2 "
              onClick={() => setTolak(true)}  
            > 
              Tolak
            </Button>
            <Button
              variant={"dark"}
              className="btn__penawaran1"
              onClick={() => setTerima(true)}
            >
              Terima
            </Button>
          </Col>
          <Col>
            <ModalsTerima show={terima} onHide={() => setTerima(false)} />
            <ModalsTolak show={tolak} onHide={() => setTolak(false)} />
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default CardPenawaran;
