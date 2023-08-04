const initialState = {
  datatoDisplay: [],
  filteredData:[],
  cartProduct: [],
  loading: false,
  error: null,
  productDetails: {},
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_START":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        datatoDisplay: action.payload,
        filteredData: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "ASCENDING":
      return {
        ...state,
        datatoDisplay: [
          ...state.datatoDisplay.sort(
            (a, b) => a.price.current.value - b.price.current.value
          ),
        ],
      };
    case "DESCENDING":
      return {
        ...state,
        datatoDisplay: [
          ...state.datatoDisplay?.sort(
            (a, b) => b.price.current.value - a.price.current.value
          ),
        ],
      };
    case "FILTERBY_BRAND":
      const filteredDataByBrand = state.filteredData.filter((e) => e.brandName === action.payload);
      return {
        ...state,
        datatoDisplay: filteredDataByBrand
      };
    case "ADDTO_CART":
      return {
        ...state,
        cartProduct: [...state.cartProduct, action.payload],
      };
    case "SEARCH_ITEM":
      return {
        ...state,
        datatoDisplay: [
          ...state.datatoDisplay.filter((e) =>
            e.name.toLowerCase().includes(action.payload)
          ),
        ],
      };
    case "PRODUCT_DETAILS":
      return {
        ...state,
        productDetails: {
          ...state.datatoDisplay.filter((e) => e.id === action.payload),
        },
      };
    case "DELETE_ITEM":
      state.cartProduct.splice(action.payload, 1);
      return {
        ...state,
        cartProduct: [...state.cartProduct],
      };
    default:
      return state;
  }
};

export default dataReducer;
