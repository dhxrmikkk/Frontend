import React, { useState } from 'react';
import Header from '../Components/Header'
//mdb
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBCarousel,
    MDBCarouselItem,
    MDBBadge,
    MDBBtn,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBValidation,
    MDBValidationItem,
    MDBInput,
    MDBInputGroup,
    MDBCheckbox
    } 
from 'mdb-react-ui-kit';

const Home = () => {
    return (
        <React.Fragment>
            <Header/>
            <div className='container-fluid'>
                <div className='slider'>
                    <MDBCarousel showControls showIndicators>
                        <MDBCarouselItem itemId={1}>
                            <img src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block w-100' alt='...' />
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId={2}>
                            <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='d-block w-100' alt='...' />
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId={3}>
                            <img src='https://mdbootstrap.com/img/new/slides/043.jpg' className='d-block w-100' alt='...' />
                        </MDBCarouselItem>
                    </MDBCarousel>
                </div>
                <div className='tables'>
                <MDBTable align='middle'>
                <MDBTableHead>
                  <tr>
                    <th scope='col'>Name</th>
                    <th scope='col'>Title</th>
                    <th scope='col'>Status</th>
                    <th scope='col'>Position</th>
                    <th scope='col'>Actions</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  <tr>
                    <td>
                      <div className='d-flex align-items-center'>
                        <img
                          src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                          alt=''
                          style={{ width: '45px', height: '45px' }}
                          className='rounded-circle'
                        />
                        <div className='ms-3'>
                          <p className='fw-bold mb-1'>John Doe</p>
                          <p className='text-muted mb-0'>john.doe@gmail.com</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className='fw-normal mb-1'>Software engineer</p>
                      <p className='text-muted mb-0'>IT department</p>
                    </td>
                    <td>
                      <MDBBadge color='success' pill>
                        Active
                      </MDBBadge>
                    </td>
                    <td>Senior</td>
                    <td>
                      <MDBBtn color='link' rounded size='sm'>
                        Edit
                      </MDBBtn>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='d-flex align-items-center'>
                        <img
                          src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                          alt=''
                          style={{ width: '45px', height: '45px' }}
                          className='rounded-circle'
                        />
                        <div className='ms-3'>
                          <p className='fw-bold mb-1'>Alex Ray</p>
                          <p className='text-muted mb-0'>alex.ray@gmail.com</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className='fw-normal mb-1'>Consultant</p>
                      <p className='text-muted mb-0'>Finance</p>
                    </td>
                    <td>
                      <MDBBadge color='primary' pill>
                        Onboarding
                      </MDBBadge>
                    </td>
                    <td>Junior</td>
                    <td>
                      <MDBBtn color='link' rounded size='sm'>
                        Edit
                      </MDBBtn>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='d-flex align-items-center'>
                        <img
                          src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                          alt=''
                          style={{ width: '45px', height: '45px' }}
                          className='rounded-circle'
                        />
                        <div className='ms-3'>
                          <p className='fw-bold mb-1'>Kate Hunington</p>
                          <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className='fw-normal mb-1'>Designer</p>
                      <p className='text-muted mb-0'>UI/UX</p>
                    </td>
                    <td>
                      <MDBBadge color='warning' pill>
                        Awaiting
                      </MDBBadge>
                    </td>
                    <td>Senior</td>
                    <td>
                      <MDBBtn color='link' rounded size='sm'>
                        Edit
                      </MDBBtn>
                    </td>
                  </tr>
                </MDBTableBody>
              </MDBTable>
                    
                </div>
                <div className='form'>
                    
                </div>
            </div>
        </React.Fragment>
    );
};

export default Home;