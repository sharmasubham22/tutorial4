import React from "react";
import '../App.css';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";
import img from '../images/mb.jpg';
import img2 from '../images/cam.jpg';
import img3 from '../images/s23.jpg';
import { Link } from 'react-router-dom';

function Cards() {
  return (
    <MDBContainer fluid className="my-5">
      <MDBRow>
        <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
          <MDBCard>
           
            <MDBCardImage
              src={img}
              position="top"
              alt="Laptop"
            />
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <Link to="/category" className="text-muted">
                    Laptops
                  </Link>
                </p>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">Macbook Pro 16"</h5>
              </div>
              <div class="d-flex justify-content-between mb-2">
              <Link class="text-muted mb-0" to="/">
                  Click to see full details
                </Link>
                <div class="ms-auto text-warning">
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                </div> 
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
          <MDBCard>
           
            <MDBCardImage
              src={img2}
              position="top"
              alt="Laptop"
            />
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <Link to="/category" className="text-muted">
                    Cameras
                  </Link>
                </p>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">Canon EOS R5</h5>
              </div>
              <div class="d-flex justify-content-between mb-2">
              <Link class="text-muted mb-0" to="/">
                  Click to see full details
                </Link>
                <div class="ms-auto text-warning">
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                </div> 
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
          <MDBCard>
           
            <MDBCardImage
              src={img3}
              position="top"
              alt="Laptop"
            />
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <Link to="/category" className="text-muted">
                    Mobile Phones
                  </Link>
                </p>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">Samsung S23</h5>
              </div>
              <div class="d-flex justify-content-between mb-2">
              <Link class="text-muted mb-0" to="/">
                  Click to see full details
                </Link>
                <div class="ms-auto text-warning">
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                </div> 
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Cards;