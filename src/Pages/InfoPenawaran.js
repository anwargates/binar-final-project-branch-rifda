import React, { useEffect, useState } from "react";
import NavbarNoSearch from "../Components/Navbar/NavbarNoSearch";
import CardProfile from "../Components/Cards/CardProfile";
import "./InfoPenawaran.css";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { IoArrowBackOutline } from "react-icons/io5";
import CardPenawaran from "../Components/Cards/CardPenawaran";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const InfoPenawaran = () => {
  const { id } = useParams()
  const token = localStorage.getItem("secondHandToken");
  const config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  };
  const url = `https://finalsecondhand-staging.herokuapp.com/offer/${id}`
  const [offer, setOffer] = useState(null)
  const state = useSelector(state => state.user)

  let content = null

  useEffect(() => {
    axios.get(url, config).then(response => { setOffer(response.data) })
  }, [url])

  if (offer ) 
  // && state.data.data.id === offer.data.user.id
  {
    content =
      <>
        {console.log(offer)}
        <NavbarNoSearch />
        <Container>
          <Row>
            <a href="/" className="back">
              <IoArrowBackOutline />
            </a>
            <Col lg={7} className="mx-auto">
              <CardProfile
                buyerID={offer.data.buyer_id}
              />
            </Col>
          </Row>
          <Row>
            <Col className="mx-auto mt-4" lg={7}>
              <h6>Daftar Produkmu yang Ditawar</h6>
              <CardPenawaran
                createdAt={offer.data.createdAt}
                namaBarang={offer.data.product.name}
                hargaBarang={offer.data.product.price}
                hargaTawar={offer.data.price_offer}
              />
            </Col>
          </Row>
        </Container>
      </>
  }


  return (
    <>
      {content}
    </>
  );
};

export default InfoPenawaran;
