import React, { useEffect, useState } from "react";
import "./CardProfile.css";
import { Card, Row, Col, Alert } from "react-bootstrap";
import axios from "axios";
import StoreCities from "../store/storeCities";

const CardProfile = (props) => {

  return (
    <>
      <Card className="card__profile mx-auto shadow-sm">
        <Row className="wrapper__">
          <Col lg={2} md={2} sm={2} xs={2} className="d-block">
            <Card.Img
              src={props.offer.data.user.profile_pict}
              alt=""
              style={{ width: 60 }}
              className="d-flex justify-content-center "
            />
          </Col>
          <Col lg={10} md={10} sm={10} xs={8} className="wrapper__body">
            <h6 className="mx-auto fs-6 fw-bold">
              {props.offer.data.user.name}
              {/* Nama Pembeli */}
              </h6>
            <p className="mx-auto fs-6 text-muted">
              <StoreCities
              cityID={props.offer.data.user.city_id}
              />
              {/* Kota */}
              </p>
          </Col>
        </Row>
      </Card>
    </>
  );


};



export default CardProfile;
