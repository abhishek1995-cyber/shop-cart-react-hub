import NavScroll from "./NavScroll";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { addtoCart } from "../store/action";
export default function ProductDetails() {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.data.productDetails[0]);
  console.log(productDetails, "product");

  //   handle quantity
  const handleAdd = () => {
    if (quantity < 9) {
      setQuantity(quantity + 1);
    }
  };
  const handleSub = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const handleCart = (product) => {
    dispatch(addtoCart(product));
  };
  return (
    <>
      <div>
        <div className="app ">
          <NavScroll />
          {productDetails && (
            <div className="productdetails-card d-flex justify-content-around mt-5">
              <div style={{ width: "35%", height: "38rem" }}>
                <figure>
                  <img
                    style={{ width: "30rem", height: "30rem" }}
                    src={"https://" + productDetails.imageUrl}
                    alt={productDetails.name}
                  />
                </figure>
                <figure className="d-flex justify-content-between">
                  {productDetails?.additionalImageUrls.map((e) => (
                    <img
                      style={{ width: "6rem" }}
                      src={"https://" + e}
                      alt={productDetails.name}
                    />
                  ))}
                </figure>
              </div>
              <div
                className="d-flex justify-content-between flex-column"
                style={{ width: "40%", height: "38rem" }}
              >
                <div>
                  <h2>{productDetails?.name}</h2>
                  <h5>BrandName:{productDetails.brandName}</h5>
                  <h5>Colour:{productDetails.colour}</h5>
                  <i className="bi-star-fill text-success"></i>
                  <i className="bi-star-fill text-success"></i>
                  <i className="bi-star-fill text-success"></i>
                  <i className="bi-star-fill text-success"></i>
                  <i className="bi-star-fill text-success"></i>
                  <span>(151)</span>
                </div>

                <div>
                  <h3>{productDetails?.price?.current?.text} or 99.99/Month</h3>
                  <p>Suggested payment with 6 months special financing</p>
                </div>
                <div className="quantity rounded-pill p-2">
                  <i
                    onClick={handleSub}
                    className="bi-dash-circle-fill p-3 h4"
                  ></i>
                  <span className="h4">{quantity}</span>
                  <i
                    onClick={handleAdd}
                    className="bi-plus-circle-fill p-3 h4"
                  ></i>
                </div>
                <div>
                  <Button className="rounded-pill px-5 me-5" variant="success">
                    Buy Now
                  </Button>
                  <Button
                    className="rounded-pill px-5"
                    onClick={() => {
                      handleCart(productDetails);
                    }}
                    variant="outline-secondary"
                  >
                    Add to Cart
                  </Button>{" "}
                </div>
                <div className="border ">
                  <div className="border p-3">
                    <i className="bi-truck h5 "> Free Delivery</i>
                    <div>
                      <Link>Enter your postal code for delivery address</Link>
                    </div>
                  </div>
                  <div className="border p-3">
                    <i className="bi-truck-flatbed h5"> Return delivery</i>
                    <div>
                      <Link>Free 30 days delivery </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
