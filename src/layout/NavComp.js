import React from 'react';
import tanishq from '../images/Tanishq.png';
import './external.css';
import { Link } from 'react-router-dom';


const NavComp = () => {
    return (
        <div>

            <style>
                {`
                    @media (min-width:576px){
                        .container{
                            display:flex;
                            justify-content:center; 
                            align-items:center;
                        }
                        
                        .navsection{
                            display:flex; 
                            justify-content:center;
                            flex-wrap:wrap;
                            margin-top:20px;
                        }
                    }
                    @media (min-width:0px) and (max-width:576px) {
                        .container{
                            display:flex;
                            flex-direction:column;
                            justify-content:center; 
                            align-items:center;
                        }
                        
                        .navsection{
                            display:flex; 
                            flex-direction:column;
                            justify-content:center;
                            flex-wrap:wrap;
                            margin-top:20px;
                        }

                        .li{
                            margin-bottom:8px;
                            margin-right:10px;
                        }
                    }
                `}
            </style>
            
            <div className='container'>
                <img className='my-2' src={tanishq} alt='Tanishq Jewellery Logo' style={{ width: '20%', maxWidth: '150px', height: 'auto', borderRadius: '50%'}} />
                <h1 className='display-1' style={{ color: '#F72C5B', marginTop: '10px',marginLeft: '15px' }}>Tanishq Jewellery</h1>
            </div>

            <hr></hr>
            <nav className='navsection'>
                <Link to='/home' className='li btn btn-outline-primary me-4' style={{ marginLeft:'10px'}}>Home</Link>
                <Link to='/about' className='li btn btn-outline-primary me-4' style={{ marginLeft:'10px'}}>About</Link>
                <Link to='/products' className='li btn btn-outline-primary me-4' style={{ marginLeft:'10px'}}>Products</Link>
                <Link to='/contact' className='li btn btn-outline-primary me-4' style={{ marginLeft:'10px'}}>Contact</Link>
            </nav>

            <hr></hr>

           
        </div>
    );
}

export default NavComp;

