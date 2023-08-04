import Dropdown from "react-bootstrap/Dropdown";
import{ useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { ascending, descending, filterBrand } from "../store/action";
export default function Filter() {
  const dispatch = useDispatch();
  const filteredData = useSelector((state) => state.data.filteredData);
  const [uniqueBrandNames, setUniqueBrandNames] = useState([]);

    // Initialize unique brand names once when the component mounts
    useEffect(() => {
      const uniqueBrands = filteredData.reduce((accumulator, product) => {
        if (!accumulator.includes(product.brandName)) {
          accumulator.push(product.brandName);
        }
        return accumulator;
      }, []);
      setUniqueBrandNames(uniqueBrands);
    }, [filteredData]);

  // const uniqueBrandNames = datatoDisplay.reduce((accumulator, product) => {
  //   if (!accumulator.includes(product.brandName)) {
  //     accumulator.push(product.brandName);
  //   }
  //   return accumulator;
  // }, []);
  console.log(uniqueBrandNames,"brandname")

  const handleDescending = (e) => {
    const { title } = e.target;
    console.log(title);
    if (title === "DESCENDING") {
      dispatch(descending());
    }
  };
  const handleAscending = (e) => {
    const { title } = e.target;
    console.log(title);
    if (title === "ASCENDING") {
      dispatch(ascending());
    }
  };

  // handling brand wise filter

  const handleBrand = (data) => {
    dispatch(filterBrand(data));
  };
  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <Dropdown data-bs-theme="dark" className="me-5">
            <Dropdown.Toggle
              className="rounded-pill"
              id="dropdown-button-dark-example1"
              variant="secondary"
            >
              Price
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                href="#/action-1"
                title="DESCENDING"
                onClick={handleDescending}
              >
                Highest To Lowest
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-2"
                title="ASCENDING"
                onClick={handleAscending}
              >
                Lowest To Highest
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown data-bs-theme="dark">
            <Dropdown.Toggle
              className="rounded-pill"
              id="dropdown-button-dark-example1"
              variant="secondary"
            >
              Brand
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {uniqueBrandNames &&
                uniqueBrandNames.map((e, i) => (
                  <Dropdown.Item key={i}
                    onClick={() => handleBrand(e)}
                    href="#/action-1"
                  >
                    {e}
                  </Dropdown.Item>
                ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <Dropdown data-bs-theme="dark">
          <Dropdown.Toggle
            className="rounded-pill"
            id="dropdown-button-dark-example1"
            variant="secondary"
          >
            Sort
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" active>
              Action
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
}
