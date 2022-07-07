import React, { useEffect, useState } from "react";
import NavbarNoSearch from "../Components/Navbar/NavbarNoSearch";
import CardProfile from "../Components/Cards/CardProfile";
import "./InfoPenawaran.css";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { IoArrowBackOutline } from "react-icons/io5";
import CardPenawaran from "../Components/Cards/CardPenawaran";
import { useParams } from "react-router-dom";
import axios from "axios";

const InfoPenawaran = () => {
  const { id } = useParams()
    const url = `https://finalsecondhand-staging.herokuapp.com/product/${id}`
    const [product, setProduct] = useState(null)

    let content = null

    useEffect(() => {
        axios.get(url).then(response => { setProduct(response.data) })
    }, [url])

    if (product) {
      content =
      <>
      <NavbarNoSearch />
      <Container>
        <Row>
          <a href="/" className="back">
            <IoArrowBackOutline />
          </a>
          <Col lg={7} className="mx-auto">
            <CardProfile 
            namaPembeli={product.data.user.name}
            />
          </Col>
        </Row>
        <Row>
          <Col className="mx-auto mt-4" lg={7}>
            <h6>Daftar Produkmu yang Ditawar</h6>
            <CardPenawaran
            namaBarang={product.data.name} 
            hargaBarang={product.data.price}
            // hargaTawar={}
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
