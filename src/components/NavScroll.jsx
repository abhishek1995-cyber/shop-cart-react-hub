import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, searchItem } from "../store/action";
import Button from "react-bootstrap/Button";

export default function NavScroll() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  let totalAmount = 0;
  const cartData = useSelector((state) => state.data.cartProduct);
  console.log(cartData, "carddata");
  const [lgShow, setLgShow] = useState(false);

  const handleDelete = (index) => {
    dispatch(deleteItem(index));
  };

  const handleSearch = (e) => {
    dispatch(searchItem(search));
  };
  console.log(search);

  return (
    <Navbar expand="lg" className="navbar">
      <Navbar.Brand href="#">ShopCart</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <NavDropdown title="Categories" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Deals</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#action1">Deals</Nav.Link>
          <Nav.Link href="#action2">Whats New</Nav.Link>

          <Nav.Link href="#">Delivery</Nav.Link>
        </Nav>
        <Form onSubmit={handleSearch} className="d-flex navbar-form">
          <Form.Control
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Product"
            className="me-2 "
            aria-label="Search"
          />
          <i className="bi-search "></i>
        </Form>
        <div>
          <i className="bi-person h3 navbar-icons"></i>
        </div>

        <div>
          <i
            className="bi-cart-check-fill h3 navbar-icons "
            onClick={() => setLgShow(true)}
          ></i>
          <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">Cart</Modal.Title>
            </Modal.Header>
            {cartData &&
              cartData.map((product, index) => {
                totalAmount += product?.price?.current?.value;
                return (
                  <Modal.Body className="d-flex justify-content-between">
                    <figure style={{width: "15%"}}>
                    <img
                      height="100px"
                      width="100px"
                      src={"https://" + product?.imageUrl}
                      alt={product?.name}
                    />
                    </figure>
                    <div className="ms-3" style={{width: "68%"}}>
                      <p style={{color:"green"}}>
                        {product?.isSellingFast ? "Selling fast" : "In stock"}
                      </p>
                      <p className="h4">{product?.name}</p>
                    </div>
                    <div style={{width: "15%"}}>
                      <p className="ms-4" style={{ color: "green" }}>
                        {product?.price?.current?.text}
                      </p>
                      <i
                        onClick={() => handleDelete(index)}
                        style={{ color: "red" }}
                        className="bi-trash-fill h3 ms-4"
                      ></i>
                    </div>
                  </Modal.Body>
                );
              })}
            <div className="px-3 text-end">
              <h3>
                Total amount : ${" "}
                <span className="text-red-400">{totalAmount} </span>
              </h3>
            </div>
            <div className="d-flex align-self-end px-3 mb-4 ">
              <Button className="px-5" variant="primary">
                Checkout
              </Button>{" "}
            </div>
          </Modal>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
