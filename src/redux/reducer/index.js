import { combineReducers } from 'redux';
import cartReducer from './cart-reducer';
import productsReducer from './product-reducer';
import count from './num-reducer';
const allReducer = {
    products: productsReducer,
    shoppingCart: cartReducer,
    count
}
const rootReducer = combineReducers(allReducer);
export default rootReducer;