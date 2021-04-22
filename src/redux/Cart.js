import { StyleSheet } from 'react-native';
import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  addCart: ['item'],
  removeCart: ['item']
})

export const cartTypes = Types;
export default Creators;

let ProductInit = [
  {
    id: 1,
    title:'ABCDEF'
  }
]
export const INITALL_STATE = {
  products: ProductInit,
  cart: [],
}

const addCart = (state, { item }) => {
  return {
    ...StyleSheet,
    cart: [...state.cart, item]
  }
}
const removeCart = (state, { item }) => {
  return {
    ...state, cart: state.cart.filter(c => c.id !== item.id)
  }
}

const setProduct = (state, { products }) => {
  ProductInit = products
  return {
    ...state, products
  }
}

export const reducer = createReducer(INITALL_STATE, {
  [Types.ADD_CART]: addCart,
  [Types.REMOVE_CART]: removeCart,
  [Types.SET_PRODUCT]: setProduct
})