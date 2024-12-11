import React from 'react';
import NavComp from '../layout/NavComp';
import './external.css';
import { bottom } from '@popperjs/core';
import {Carousel} from 'react-bootstrap';
import img1 from '../images/img1.webp';
import img2 from '../images/img2.webp';
import img3 from '../images/img3.webp';

const HomeComp = () => {

    let footer = {
        paddingTop: '20px',
        paddingBottom: '0px',
        width:'100%',
        position:'relative',
        bottom:'-20px'
    };

    return (

        
        <div style={{backgroundColor: '#FFF8E8',minHeight:'100vh'}}>
             <style>
                {`

                    // @media (min-width: 1440px) {
                    //         .add {
                    //             margin-left:143px !important;
                    //             margin-bottom:10px;
                    //         }
                    // }

                     @media (max-width: 1440px) {
                        .carousel{
                           margin-top:20px;
                           margin-left:230px;
                        }
                    }

                    @media (max-width: 1024px) {
                         .carousel{
                           margin-top:20px;
                           margin-left:130px;
                        }
                    }

                    @media (max-width: 768px) {
                        .carousel{
                           margin-top:20px;
                           margin-left:115px;
                        }
                        img{
                            width:300px;
                            height:300px;
                        }
                    }

                    @media (max-width:576px) {
                         .carousel{
                           margin-top:20px;
                           margin-left:60px;
                        }
                        img{
                            width:200px;
                            height:200px;
                        }
                    }

                    // @media (max-width: 576px) {
                    //     .add {
                    //         margin-left:15px !important;
                    //         margin-bottom:10px;
                    //     }
                    // }

                   
                `}
            </style>
            
            <NavComp />

            <main style={{ paddingBottom: '20px' }}>
                <h3 className="display-3" style={{ color: '#F72C5B', fontSize: '40px', marginBottom: '20px', marginLeft:'20px'}}>
                    Information About Tanishq
                </h3>
                <div style={{ marginTop: '20px', padding: '0 20px' }}>
                <div className="accordion" id="accordionExample">
                        
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Timeless Appeal
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    At Tanishq, jewellery is not a product but a manifestation of artistry and
                                    our exquisite range of jewel pieces strike the perfect balance between
                                    traditional charm and contemporary appeal. With designs that capture the
                                    beauty and celebration of special occasions in the life of the Indian
                                    woman, Tanishq aims to be an integral part of her journey.
                                </div>
                            </div>
                        </div>

                    
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Epitomizing Excellence
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    At Tanishq, we strive to deliver excellence, consistently. We've brought
                                    to the market a whole new standard of business ethics and product
                                    reliability.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Success Secrets
                                </button>
                            </h2>
                            <div
                                id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Our understanding of the ethos of the current Indian jewellery market and
                                    our constant evolution along with its changing demands and preferences is
                                    why Tanishq enjoys the distinct honour of being coveted by Indian women.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='carousel'>
                <Carousel>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="First slide" /> */}
                        <img src={img1} alt='img1'></img>
                        <Carousel.Caption>
                        {/* <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="Second slide" /> */}
                        <img src={img2} alt='img2'></img>
                        <Carousel.Caption>
                        {/* <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="Third slide" /> */}
                        <img src={img3} alt='img3'></img>
                        <Carousel.Caption>
                        {/* <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>
            </main>

            <footer style={footer}>
                <hr />
                <div className='container'>
                    <h2 style={{ float: 'right', color: '#FF748B' }}>
                        This App Developed By <strong>Sai Kutthalingam S</strong>
                    </h2>
                    <div style={{ clear: 'both' }}></div>
                </div>
                <hr />
            </footer>
        </div>
    );
};

export default HomeComp;
