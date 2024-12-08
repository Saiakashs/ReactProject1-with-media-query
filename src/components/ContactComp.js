import React, { useState } from 'react';
import './external.css';
import tanishq from '../images/Tanishq.png';
import { Link } from 'react-router-dom';

const ContactComp = () => {

    
 
    let footer = {
        position: 'relative',
        bottom: '-100px',
        backgroundColor: '#E0F4FF'
    };

    const [user, setUser] = useState({
        uname: '',
        uemail: '',
        ucontact: '',
        uta: '',
    });

    const changeInput = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }

    const checkData = (event) => {
        event.preventDefault();

        if (user.uname.trim() === '') {
            window.alert('Name is required');
            return false;
        }

        if (!user.uname.trim().match('^[a-zA-Z ]{5,25}$')) {
            window.alert('Name should contain only characters with minimum:5 and maximum:25');
            return false;
        }

        if (user.uemail.trim() === '') {
            window.alert('Email is required');
            return false;
        }

        if (!user.uemail.trim().match("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]{8,30}$")) {
            window.alert('Enter valid email');
            return false;
        }

        if (user.ucontact.trim() === '') {
            window.alert('Phone Number is required');
            return false;
        }

        if (!user.ucontact.trim().match('^[0-9]{9,11}$')) {
            window.alert('Phone Number must contain only numbers with minimum:9 and maximum:11');
            return false;
        }

        window.alert(JSON.stringify(user));

        setUser({
            uname: '',
            uemail: '',
            ucontact: '',
            uta: ''
        })
    }

    return (

        <div style={{ backgroundColor: '#E0F4FF',minHeight:'100vh'}}>

            <style>
                {`
                    @media (max-width:576px) {
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
                            align-items:center;
                        }

                        .li{
                            width:90%;  
                            margin-bottom:8px;
                        }
                            
                        
                    }
                `}
            </style>
            
            <div className='container' style={{display: 'flex',justifyContent:'center',alignItems:'center'}}>
                <img className='my-2' src={tanishq} alt='Tanishq Jewellery Logo' style={{ width: '20%', maxWidth: '150px', height: 'auto', borderRadius: '50%'}} />
                <h1 className='display-1' style={{ color: '#F72C5B', marginTop: '10px',marginLeft: '15px' }}>Tanishq Jewellery</h1>
            </div>

            <hr></hr>
            <nav className='navsection' style={{display: 'flex',justifyContent:'center',alignItems:'center'}}>
                <Link to='/home' className='li btn btn-outline-primary me-4' style={{ marginLeft:'10px'}}>Home</Link>
                <Link to='/about' className='li btn btn-outline-primary me-4' style={{ marginLeft:'10px'}}>About</Link>
                <Link to='/products' className='li btn btn-outline-primary me-4' style={{ marginLeft:'10px'}}>Products</Link>
                <Link to='/contact' className='li btn btn-outline-primary me-4' style={{ marginLeft:'10px'}}>Contact</Link>
            </nav>

            <hr></hr>

            <main>
                <div className='container'>
                    {/* Center the form properly */}
                    <div className='row justify-content-center'>
                        <div className='col-lg-8'>
                            <form onSubmit={checkData} style={{ width: '100%' }}>
                                <label className='form-label' htmlFor='uname'>Enter Your Name:</label>
                                <input className='form-control' size={25} type='text' name='uname' id='uname' value={user.uname} onChange={changeInput} />
                                <label className='form-label mt-2' htmlFor='uemail'>Enter Your Email:</label>
                                <input className='form-control' type='email' name='uemail' id='uemail' value={user.uemail} onChange={changeInput} />
                                <label className='form-label mt-2' htmlFor='ucontact'>Enter Your Phone Number:</label>
                                <input className='form-control' type='tel' name='ucontact' id='ucontact' value={user.ucontact} onChange={changeInput} />
                                <label className='form-label mt-2' htmlFor='uta'>Give Your Feedback:</label> <br />
                                <textarea className="form-control mb-2" name='uta' rows="4" value={user.uta} onChange={changeInput}></textarea>
                                <button className='btn btn-outline-primary mt-2'>Submit</button>
                            </form>
                        </div>
                    </div>

                    <div className='row justify-content-center'>
                        <div className='col-lg-8'>
                            <iframe
                                className='mt-4'
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124479.68760733806!2d80.15072865421932!3d12.843906854104834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d509ae2c201%3A0x9bdf1b7aa7395eb3!2sTanishq%20Jewellery%20-%20Chennai%20-%20East%20Coast%20Road!5e0!3m2!1sen!2sin!4v1733555898974!5m2!1sen!2sin"
                                style={{
                                    width: "100%",
                                    height: "200px",
                                    border: "0",
                                    allowFullScreen: "",
                                    loading: "lazy",
                                    referrerPolicy: "no-referrer-when-downgrade"
                                }}
                            ></iframe>
                        </div>
                    </div>
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
    )
}

export default ContactComp;
