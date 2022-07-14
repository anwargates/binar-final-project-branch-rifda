import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './seller.css'
import { Button, Alert, Carousel } from 'react-bootstrap'
import ModalBuyer from '../Components/Modal/ModalBuyer'
import AlertBuyer from '../Components/Alert/AlertBuyer'
import axios from 'axios'
import jwtDecode from "jwt-decode"
import userSlice from "../Components/store/userSlice"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "react-hook-form";
// import Navbar from '../Components/Navbar/Navbar'

const Buyer = () => {
    const [show, setShow] = useState(false);
    const [alertShow, setAlertShow] = useState(false);
    const [disable, setDisable] = useState(false);
    const [loginStatus, setLoginStatus] = useState({
        success: false,
        message: "",
    });
    const { register, handleSubmit, formState } = useForm();


    const { id } = useParams()
    // const url = `https://finalsecondhand-staging.herokuapp.com/product/${id}`
    const [product, setProduct] = useState(null)

    let content = null

    // useEffect(() => {
    //     axios.get(url).then(response => { setProduct(response.data) })
    // }, [url])

    // dispatch axios
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //menampilkan data  email dan password


    const postData = {
        email: "demouser@gmail.com",
        password: "123",
    };

    const state = useSelector(state => state.user)
    // console.log(state)

    useEffect(() => {

        axios
            .post("https://finalsecondhand-staging.herokuapp.com/auth/login", postData) // kalau dah ready taruh link heroku disini
            .then((res) => {
                console.log(res);
                /* memastikan bahwa token nya ada
                if (typeof res.data.acessToken !== "undefined") {
                    localStorage.setItem("secondHandToken", res.data.acessToken);
                } */

                // menyimpan di redux store

                const user = jwtDecode(res.data.token);
                console.log(user); 
                const config = {
                    headers: {
                        Authorization: 'Bearer ' + res.data.token
                    }
                };
                axios.get(`https://finalsecondhand-staging.herokuapp.com/user`, config).then((res) => {
                    console.log(res);    
                dispatch(
                        userSlice.actions.addUser({
                            userData: res.data,
                        })
                    );
                    // jika sudah login maka diarahkan ke :
                    navigate(`/seller/${id}`);
                });

                axios.get(`https://finalsecondhand-staging.herokuapp.com/product/${id}`).then(response => { setProduct(response.data) })
            })

            // failed register notification
            .catch((err) => {
                console.log(err);
                setLoginStatus({
                    success: false,
                    message: "Failed to Login, make sure your Account has been register",
                });
            });
    }, [`https://finalsecondhand-staging.herokuapp.com/product/${id}`])

    
    if (product && state.data.data.id === product.data.user.id) {
        content =
            <>
                {/* <Navbar /> */}
                <AlertBuyer show={alertShow} onClose={() => setAlertShow(false)} />
                <div className="back-nav">
                    <Link to="/"><img src="/img/fi_arrow-left.png" alt="" /></Link>
                    {/* <a href=""><img src="img/fi_arrow-left.png" alt=""></a> */}
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-8 col-lg-8 g-4 carousel-mobile">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/img/product.png"
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/img/product.png"
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/img/product.png"
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/img/product.png"
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 g-4 harga-mobile">
                            <div className="row gy-4 alignment-mobile">
                                <div className="col-12">
                                    <div className="row harga">
                                        <h1>
                                            {/* Jam Tangan Casio */}
                                            {product.data.name}
                                        </h1>
                                        <h3>
                                            {/* Aksesoris */}
                                            {product.data.product_tags.map(function (tag) {
                                                return tag.category.name + ", "
                                            })}
                                        </h3>
                                        <h4 className="price">{/* Rp 250.000 */}
                                            Rp.
                                            {product.data.price}</h4>
                                        <Button
                                            // href='/info'
                                            disabled={disable}
                                            className='button shadow-none button-terbitkan'
                                        // onClick={() => setAlertShow(true)}
                                        >
                                            <p className='btn-text'> Terbitkan </p>

                                        </Button>
                                        <Button
                                            //    href='/info'
                                            disabled={disable}
                                            className='button shadow-none button-edit'
                                        // onClick={() => setAlertShow(true)}
                                        >
                                            <p className='btn-text'> Edit </p>
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
                                            <h1>{/* Nama Penjual */}
                                                {product.data.user.name}</h1>
                                            <h3>Kota</h3>
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