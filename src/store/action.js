import axios from "axios";

export const fetchDataAction = (options) => {
  return async (dispatch) => {
    // Dispatch an action to indicate that data fetching has started
    dispatch({ type: "FETCH_DATA_START" });

    // Make the API request using axios (replace 'API_URL' with your actual API endpoint)

    await axios
      .request(options)
      .then((response) => {
        dispatch({ type: "FETCH_DATA_SUCCESS", payload: response?.data?.products });
      })
      .catch((error) => {
        // Dispatch an action in case of an error
        dispatch({ type: "FETCH_DATA_FAILURE", payload: error.message });
      });
  };
};

export const ascending = () => {
  return {
    type: "ASCENDING",
  };
};
export const descending = () => {
  return {
    type: "DESCENDING",
  };
};
export const addtoCart = (data) => {
  return {
    type: "ADDTO_CART",
    payload: data,
  };
};
export const productDetails = (data) => {
  return {
    type: "PRODUCT_DETAILS",
    payload: data,
  };
};
export function deleteItem(data) {
  return {
    type: "DELETE_ITEM",
    payload: data,
  };
}
export function filterBrand(data) {
  return {
    type: "FILTERBY_BRAND",
    payload: data,
  };
}
export function searchItem(data) {
  return {
    type: "SEARCH_ITEM",
    payload: data,
  };
}
