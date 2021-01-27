let initialState = {
  cart: [],
  cartCount: 0
}

export const addItem = (product) => {
  console.log('CART REDUCER in addItem ', product);
  return {
    type: 'ADDITEM',
    payload: product
  }
}

export const removeItem = (product) =>{
  return {
    type: 'REMOVE',
    payload: product
  }
}

export const clearCart = () => {
  return {
    type: 'RESET',
  }
}

const cartSwitchBoard = (state=initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'ADDITEM':
      console.log('ADDING ITEM TO CART in CART REDUCER SWITCHBOARD');
      return {...state, cart: [...state.cart, payload], cartCount: state.cartCount + 1};
      
      case 'REMOVE':
        console.log('REMOVING ITEM TO CART in CART REDUCER SWITCHBOARD');
        
        //TODO: figure out how to remove from state
        return state; //need to update

      case 'RESET':
        return initialState;
      
      default:
        return state;
  }
}

export default cartSwitchBoard;