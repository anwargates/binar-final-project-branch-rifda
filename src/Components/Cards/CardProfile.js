import React, { useState } from "react";
import "./CardProfile.css";
import { Card, Row, Col, Alert } from "react-bootstrap";

const CardProfile = (props) => {

  return (
    <>
      <Card className="card__profile mx-auto shadow-sm">
        <Row className="wrapper__">
          <Col lg={2} md={2} sm={2} xs={2} className="d-block">
            <Card.Img
              src="./Img/profile.png"
              alt=""
              style={{ width: 60 }}
              className="d-flex justify-content-center "
            />
          </Col>
          <Col lg={10} md={10} sm={10} xs={8} className="wrapper__body">
            <h6 className="mx-auto fs-6 fw-bold">Nama Pembeli</h6>
            <p className="mx-auto fs-6 text-muted">Kota</p>
          </Col>
        </Row>
      </Card>
    </>
  );


};



export default CardProfile;
