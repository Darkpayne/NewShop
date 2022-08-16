import React from 'react'

const reducer = (state , action) => {
  if (action.type === "ADD_TO_CART"){
    return {...state, 
      cartItem: [...state.cartItem, {...action.payload, qty:1}]}
  }
  if (action.type === "REMOVE_FROM_CART"){
    return {...state, 
      cartItem: state.cartItem.filter((c)=>c.id !== action.payload.id)}
  }
  if (action.type === "INCREMENT_ITEM"){
    return {...state,
      cartItem: state.cartItem.map((item)=>item.id === action.payload.id ? {...item, qty: item.qty + 1} : item)}
  }
  if (action.type === "DECREMENT_ITEM"){
    return {...state,
      cartItem: state.cartItem.map((item)=>item.id === action.payload.id ? {...item, qty: item.qty - (item.qty > 1 ? 1 : 0)} : item)}
  }
  
  return state
}

export default reducer