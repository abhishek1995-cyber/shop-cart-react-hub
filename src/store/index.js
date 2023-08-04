import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Import your reducers here
import dataReducer from "./dataReducer";

const rootReducer = combineReducers({
  // Add your reducers here
  data: dataReducer, // Replace 'data' with the correct reducer key for your data
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
