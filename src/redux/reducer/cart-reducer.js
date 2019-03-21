import { ADD_TO_CART } from "../action/cart-action";
const initialState = {
    cart: [{
        product: 'bread 700g',
        quantity: 2,
        unitCost: 90
    },
    {
        product: 'milk 500ml',
        quantity: 1,
        unitCost: 47
    }]
}
export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART: {
            console.log('我是cart-action（购物车）的方法，我只操作它的数据，想操作产品product-action的数据，去它那里定义操作函数吧，记得最终是在reducer里操作的');
            return {
                ...state,
                cart:[...state.cart,action.payload]
            }
        }
        default:
            return state;
    }
}