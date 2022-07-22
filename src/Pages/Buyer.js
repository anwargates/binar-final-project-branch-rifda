import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './buyer.css'
import { Button, Carousel } from 'react-bootstrap'
import ModalBuyer from '../Components/Modal/ModalBuyer'
import AlertBuyer from '../Components/Alert/AlertBuyer'
import StoreCities from '../Components/store/storeCities'
// import Navbar from '../Components/Navbar/Navbar'
import axios from 'axios'
import { IoHeart } from 'react-icons/io5'
import { IconContext } from 'react-icons/lib'
import CarouselProduct from '../Components/Carousel/CarouselProduct'


const Buyer = () => {
    // params
    const { id } = useParams()
    // states
    const [show, setShow] = useState(false);
    const [alertShow, setAlertShow] = useState(false);
    const [disable, setDisable] = useState(false);
    const [isWishlisted, setIsWishlisted] = useState(false)
    const [product, setProduct] = useState(null)
    const [wishlistID, setWishlistID] = useState(null)

    const buttonText = disable ? "Menunggu respon penjual" : "Saya Tertarik dan ingin Nego";

    const url = `https://finalsecondhand-staging.herokuapp.com/product/${id}`
    const urlWishlist = `https://finalsecondhand-staging.herokuapp.com/wishlist`
    const urlWishlistDelete = `https://finalsecondhand-staging.herokuapp.com/wishlist/${wishlistID}`
    const urlWishlistCreate = `https://finalsecondhand-staging.herokuapp.com/wishlist/${id}`

    let content = null

    const token = localStorage.getItem("secondHandToken");
    const config = {
        headers: {
            Authorization: 'Bearer ' + token
        }
    };

    // wishlist handler
    // create and delete wishlist
    const handleWishlist = () => {
        if (isWishlisted) {
            axios.delete(urlWishlistDelete, config).then(response => {
                console.log(response)
                setIsWishlisted(!isWishlisted)
            });
        } else {
            axios.post(urlWishlistCreate, null, config).then(response => {
                console.log(response)
                setIsWishlisted(!isWishlisted)
            });
        }

    }

    useEffect(() => {
        axios.get(url).then(response => { setProduct(response.data) });
        axios.get(urlWishlist, config).then(response => {
            console.log(response)
            response.data.data.map(function (tag) {
                if (tag.product_id == id) {
                    setWishlistID(tag.id)
                    setIsWishlisted(true)
                }
                return null;
            })
        })
    }, [url])

    if (product) {
        content =
            <>
                {/* <Navbar /> */}
                <AlertBuyer show={alertShow} onClose={() => setAlertShow(false)} />
                <div className="back-nav">
                    <Link to="/"><img src="/img/fi_arrow-left.png" alt="" /></Link>
                    {/* <a href=""><img src="img/fi_arrow-left.png" alt=""></a> */}
                </div>
                <div className="container container-buyer">
                    <div className="row">
                        <div className="col-sm-12 col-md-8 col-lg-8 g-4 carousel-mobile">
                            <CarouselProduct/>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 g-4 harga-mobile">
                            <div className="row gy-4 alignment-mobile">
                                <div className="col-12">
                                    <div className="row harga">
                                        <div>
                                            <div className="top-row-wishlist">
                                                <h1>
                                                    {/* Jam Tangan Casio */}
                                                    {product.data.name}
                                                </h1>
                                                <IconContext.Provider value={isWishlisted ? { color: "black" } : { color: "grey" }}>
                                                    <IoHeart
                                                        onClick={handleWishlist}
                                                    />
                                                </IconContext.Provider>
                                            </div>
                                        </div>
                                        <h3>
                                            {/* Aksesoris */}
                                            {product.data.product_tags.map(function (tag) {
                                                return tag.category.name + ", "
                                            })}
                                        </h3>
                                        <h4 className="price">
                                            {/* Rp 250.000 */}
                                            Rp.
                                            {product.data.price}
                                        </h4>
                                        <Button
                                            disabled={disable}
                                            className='button shadow-none button-disable'
                                            onClick={() => setShow(true)}>
                                            <p className='btn-text'>{buttonText}</p>
                                        </Button>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row seller">
                                        <div className="col-4 profile">
                                            <Link to="/"><img className="" src="/img/profile.png" alt="" /></Link>
                                            {/* <img src="/img/profile.png" alt=""> */}
                                        </div>
                                        <div className="col-8 seller-name">
                                            <h1>
                                                {/* Nama Penjual */}
                                                {product.data.user.name}
                                            </h1>
                                            <h3>
                                                <StoreCities
                                                    cityID={product.data.user.city_id}
                                                />
                                                {/* Kota */}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-8 col-lg-8 g-4 desc-mobile">
                            <div className="row desc">
                                <h1>Deskripsi</h1>
                                <p>{/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Exercitationem cupiditate excepturi assumenda ipsum molestias, aut, odit quod
                                    quibusdam quos consequuntur libero incidunt impedit, nam possimus explicabo totam quam qui tempore. */}
                                    {product.data.description}
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Exercitationem cupiditate excepturi assumenda ipsum molestias, aut, odit quod
                                    quibusdam quos consequuntur libero incidunt impedit, nam possimus explicabo totam quam qui tempore.
                                </p>
                            </div>
                        </div>
                    </div>
                    <ModalBuyer
                        show={show}
                        onHide={() => setShow(false)}
                        alertOnHide={() => setAlertShow(true)}
                        disableOnHide={() => setDisable(true)}

                    />
                </div>
            </>
    }



    return (
        <>
            {content}
        </>

    )
}


export default Buyer