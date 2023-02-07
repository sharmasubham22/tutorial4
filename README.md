# Assignment 1

* *Date Created*: 06 FEB 2023
* *Last Modification Date*: 06 FEB 2023
* *Netlify URL*: https://63e1afd415fe0b000816fae4--ubiquitous-bienenstitch-e6409d.netlify.app/ 
* *Git URL*: https://git.cs.dal.ca/subham/csci-5709/-/tree/A1 

## Authors

* Subham Sharma(subham@dal.ca) - B00910585

### Prerequisites

* Visual Studio code Installation : 'https://code.visualstudio.com/download'

### Installing

-By creating a local folder, clone the project into the folder.
-Open the project in VS Code.
-run npm commands like "npm i react-router-dom" to install npm modules.
-to start the application, run command "npm start"

Compiled successfully!

You can now view webproj in the browser.

Local:            http://localhost:3000
On Your Network:  http://your-ip:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully

## Deployment

* Pushed code on a Github repository.
* Connected github repository with Netlify account.
* Project is built on Netlify.
* App Successfully Deployed.

## Built With

* [React](https://reactjs.org/) - The web framework used
* [BootStrap](https://react-bootstrap.github.io/) - The styling framework used

## Sources Used

### cards.js

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
              
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

```
The code above was created by adapting the code in [Material Design for Bootstrap](https://mdbootstrap.com/docs/react/extended/product-cards/) as shown below: 

```
<MDBCard>
            <div className="d-flex justify-content-between p-3">
              <p className="lead mb-0">Today's Combo Offer</p>
              <div
                className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                style={{ width: "35px", height: "35px" }}
              >
                <p className="text-white mb-0 small">x4</p>
              </div>
            </div>
            <MDBCardImage
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"
              position="top"
              alt="Laptop"
            />
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <a href="#!" className="text-muted">
                    Laptops
                  </a>
                </p>
                <p className="small text-danger">
                  <s>$1099</s>
                </p>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">HP Notebook</h5>
                <h5 className="text-dark mb-0">$999</h5>
              </div>

              <div class="d-flex justify-content-between mb-2">
                <p class="text-muted mb-0">
                  Available: <span class="fw-bold">6</span>
                </p>
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
```

- <!---How---> The code in [Material Design for Bootstrap](https://mdbootstrap.com/docs/react/extended/product-cards/) was implemented by MDB to give layout styles for product cards.
- <!---Why---> [Material Design for Bootstrap](https://mdbootstrap.com/docs/react/extended/product-cards/)'s Code was used because a card layout was needed for the products.
- <!---How---> [Material Design for Bootstrap](https://mdbootstrap.com/docs/react/extended/product-cards/)'s Code was modified by adding images, setting css styling according to the requirements and made adjustments.

### mobile.js

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
                    Mobile Phones
                  </Link> 
                </p>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">iPhone 14 Pro</h5>
              </div>
              <div class="d-flex justify-content-between mb-2">
              <Link class="text-muted mb-0" to="/">
                  Click to see full details
                </Link> 
                
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
                    Mobile Phones
                  </Link> 
                </p>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">Asus Zenfone 9</h5>
              </div>
              <div class="d-flex justify-content-between mb-2">
              <Link class="text-muted mb-0" to="/">
                  Click to see full details
                </Link> 
               
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
              
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

```
The code above was created by adapting the code in [Material Design for Bootstrap](https://mdbootstrap.com/docs/react/extended/product-cards/) as shown below: 

```
<MDBCard>
            <div className="d-flex justify-content-between p-3">
              <p className="lead mb-0">Today's Combo Offer</p>
              <div
                className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                style={{ width: "35px", height: "35px" }}
              >
                <p className="text-white mb-0 small">x4</p>
              </div>
            </div>
            <MDBCardImage
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"
              position="top"
              alt="Laptop"
            />
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <a href="#!" className="text-muted">
                    Laptops
                  </a>
                </p>
                <p className="small text-danger">
                  <s>$1099</s>
                </p>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">HP Notebook</h5>
                <h5 className="text-dark mb-0">$999</h5>
              </div>

              <div class="d-flex justify-content-between mb-2">
                <p class="text-muted mb-0">
                  Available: <span class="fw-bold">6</span>
                </p>
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
```

- <!---How---> The code in [Material Design for Bootstrap](https://mdbootstrap.com/docs/react/extended/product-cards/) was implemented by MDB to give layout styles for product cards.
- <!---Why---> [Material Design for Bootstrap](https://mdbootstrap.com/docs/react/extended/product-cards/)'s Code was used because a card layout was needed for the products.
- <!---How---> [Material Design for Bootstrap](https://mdbootstrap.com/docs/react/extended/product-cards/)'s Code was modified by adding images, setting css styling according to the requirements and made adjustments.

### test.js

<Carousel className="carousel">
      <Carousel className="carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Apple unveils the new iphones line-up.</h3>
          <Link to="/">Click here to see the product specifications.</Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>The all new Insta360 action camera!!</h3>
          <Link to="/">Click here to see the product specifications.</Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Gaming Beast - Asus ROG</h3>
          <Link to="/">Click here to see the product specifications.</Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
```
The code above was created by adapting the code in [React Bootstrap]( https://react-bootstrap.github.io/components/carousel/) as shown below: 

```
<Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
```
### nav2.js

const [toggleMenu, setToggleMenu] = useState(false)
  
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }
 
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)
    return () => {
      window.removeEventListener('resize', changeWidth)
  }
  }, [])

        <ul className="list2">
          <li className="items">HOME</li>
          <li className="items">BLOGS</li>
          <Link className="nav-a" to="/"><li className="items">PRODUCT CATALOGUE</li></Link>
          <li className="items">EVENTS</li>
          <li className="items">REVIEWS</li>
          <li className="items"> VIEW PROFILE</li>
          
        </ul>
        )}
        <button onClick={toggleNav} className="btn">&#9776;</button>

```
The code above was created by adapting the code in [The Web School]( https://www.youtube.com/watch?v=8kPk7CTOQh4) as shown below: 

```
const [toggleMenu, setToggleMenu] = useState(false)
  
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }
 
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  <button onClick={toggleNav} className="btn">&#9776;</button>
```

- <!---How---> The code in [The Web School]( https://www.youtube.com/watch?v=8kPk7CTOQh4) was implemented by The Web School to give responsive navigation bar.
- <!---Why---> [The Web School]( https://www.youtube.com/watch?v=8kPk7CTOQh4)'s Code was used because a responsive navigation bar was required.
- <!---How---> [The Web School]( https://www.youtube.com/watch?v=8kPk7CTOQh4)'s Code was modified by adding list and updating styles.


## Acknowledgments

* References:
-carousel : https://react-bootstrap.github.io/components/carousel/
-cards : https://mdbootstrap.com/docs/react/extended/product-cards/
-navbar : https://www.youtube.com/watch?v=8kPk7CTOQh4

* Image References: 
-iphone : https://www.bell.ca/Mobility/Products/iphone-14-pro-max
-zenfone : https://gadgetward.com/products/asus-zenfone-9-ai2202-128gb-8gb-ram-blue-global-version
-s23 : https://www.mediamarkt.nl/nl/product/_samsung-galaxy-s23-plus-5g-512-gb-roze-1750624.html 
-mbook: https://www.simply.ca/products/apple-macbook-pro-13-inch-m2-2022-open-box
-camera : https://carmans.com/cameras-accessories 

