export const ADD_TO_CART = 'Cart_ADD_TO_CART';

export function cartaddToCart(product, quantity, unitCost) {
    return {
        type: ADD_TO_CART,
        payload: { product, quantity, unitCost }
    }
}