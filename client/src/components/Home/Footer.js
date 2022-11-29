import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare, FaTwitterSquare, FaHome, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
    return (
        <MDBFooter bgColor='dark' className='text-center text-lg-start text-white-50'>

            <MDBContainer className='text-center text-md-start pt-2'>
                <MDBRow className='mt-3'>
                    <MDBCol md="3" lg="4" xl="4" className='mx-auto mb-2' color='#bfbfbf'>
                        <div className='h6 text-uppercase fw-bold mb-4'>
                            <MDBIcon icon="gem" className="me-3" />
                            criclive
                        </div>
                        <p>
                            <FaHome />
                            MNIT, JAIPUR 302017,
                        </p>
                        <p>
                            RAJASTHAN INDIA
                        </p>
                        <p>
                            <FaEnvelope />
                            criclive@gmail.com
                        </p>
                        <p>
                            <FaPhone /> +91 9999999999
                        </p>

                    </MDBCol>

                    <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-2'>
                        <div className='h6 text-uppercase fw-bold mb-4'>Follow Us On</div>
                        <p>
                            <a href='https://www.facebook.com/sudama.dhakad.31'
                                title='Facebook' target="_blank" rel="noopener noreferrer" className='me-4 text-white'>
                                <FaFacebookSquare />facebook
                            </a>
                        </p>
                        <p>
                            <a href='https://twitter.com/sdhakad011'
                                title='Twitter' target="_blank" rel="noopener noreferrer" className='me-4 text-white'>
                                <FaTwitterSquare /> twitter
                            </a>
                        </p><p>
                            <a href='https://www.instagram.com/sudama.dhakad/'
                                title='Instagram' target="_blank" rel="noopener noreferrer" className='me-4 text-white'>
                                <FaInstagramSquare /> instagram
                            </a>
                        </p>
                        <p>
                            <a href='https://www.linkedin.com/in/sudama-dhakad-71a0a8201/'
                                title='Linkedin'
                                target="_blank" rel="noopener noreferrer" className='me-4 text-white'>
                                <FaLinkedin /> linkedin
                            </a>
                        </p>

                    </MDBCol>

                    <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-2'>
                        <div className='h6 text-uppercase fw-bold mb-4'>COMPANY</div>
                        <p>
                            <a href='#!' title='Careers'
                                target="_blank" rel="noopener noreferrer" className='me-4 text-white'>
                                Careers
                            </a>
                        </p>
                        <p>
                            <a href='#!' title='Advertise'
                                target="_blank" rel="noopener noreferrer" className='me-4 text-white'>
                                Advertise
                            </a>

                        </p>
                        <p>
                            <a href='#!' title='Privacy Policy'
                                target="_blank" rel="noopener noreferrer" className='me-4 text-white'>
                                Privacy Policy
                            </a>

                        </p>
                        <p>
                            <a href='#!' title='Terms of Use'
                                target="_blank" rel="noopener noreferrer" className='me-4 text-white'>
                                Terms of Use
                            </a>

                        </p>
                    </MDBCol>


                </MDBRow>
            </MDBContainer>

            <div className='text-center p-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2022 criclive, All rights reserved
            </div>
        </MDBFooter>
    );
}