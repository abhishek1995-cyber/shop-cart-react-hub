import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataAction, addtoCart, productDetails } from "../store/action";
import { useNavigate } from "react-router-dom";

export default function Product() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const datatoDisplay = useSelector((state) => state.data.datatoDisplay);
  console.log(datatoDisplay, "dataproduct");

  const handleCart = (product) => {
    dispatch(addtoCart(product));
  };

  const handleProduct = (id) => {
    dispatch(productDetails(id));
    navigate("/productdetails");
  };

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://asos2.p.rapidapi.com/products/v2/list",
      params: {
        store: "US",
        offset: "0",
        categoryId: "4209",
        limit: "48",
        country: "US",
        sort: "freshness",
        currency: "USD",
        sizeSchema: "US",
        lang: "en-US",
      },
      headers: {
        "X-RapidAPI-Key": "198a7dcb67mshc77df4842d47d09p145c42jsn5f06c7f3fa7a",
        "X-RapidAPI-Host": "asos2.p.rapidapi.com",
      },
    };

    dispatch(fetchDataAction(options));
  }, [dispatch]);

  return (
    <div className="d-flex flex-wrap product-card justify-content-between ">
      {datatoDisplay &&
        datatoDisplay.map((item, index) => (
          <div className="my-3">
            <Card
              className="product-card"
              key={index}
              style={{ width: "20rem", height: "32rem" }}
            >
              <Card.Img
                onClick={() => handleProduct(item.id)}
                style={{ cursor: "pointer" }}
                variant="top"
                src={"https://" + item?.imageUrl}
                alt={item.name}
                height="250px"
              />
              <Card.Body>
                <div
                  onClick={() => handleProduct(item.id)}
                  className="d-flex justify-content-between"
                  style={{ cursor: "pointer" }}
                >
                  <Card.Title>{item?.brandName}</Card.Title>
                  <Card.Text>{item?.price?.current?.text}</Card.Text>
                </div>
                <Card.Text>{item?.name}</Card.Text>
                <i className="bi-star-fill text-success"></i>
                <i className="bi-star-fill text-success"></i>
                <i className="bi-star-fill text-success"></i>
                <i className="bi-star-fill text-success"></i>
                <i className="bi-star-fill text-success"></i>
                <span>(151)</span>
                <Card.Text>Colour: {item?.colour}</Card.Text>
                <Button
                  className="product-card-btn"
                  variant="primary"
                  onClick={() => {
                    handleCart(item);
                  }}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
    </div>
  );
}
