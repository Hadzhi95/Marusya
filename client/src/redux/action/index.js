// Add Item to Basket

export const addCart = (product) => {
  return {
    type: 'ADDITEM',
    payload: product
  }
}

// For Delete Item in Basket

export const deleteCart = (product) => {
  return {
    type: 'DELITEM',
    payload: product
  }
}
