import superagent from 'superagent';

let initialState = {
  results: []
}

// const API = process.env.REACT_APP_API; //this is untested but should work to obscure the api URL

export const getApi = () => dispatch => {
  return superagent.get('https://simonpanek-auth-api.herokuapp.com/api/v1/store')
    .then(response => {
      dispatch(getAction(response.body))
    })
}

export const deleteApi = (_id) => dispatch => {
  return superagent.delete(`https://simonpanek-auth-api.herokuapp.com/api/v1/store/${_id}`)
    .then(response => {
      dispatch(deleteAction(response.body))
    })
}

export const postApi = () => dispatch => {
  return superagent.post('https://simonpanek-auth-api.herokuapp.com/api/v1/store')
    .then(response => {
      dispatch(getAction(response.body))
    })
}

export const putApi = (product, instruction) => dispatch => {
  console.log('API REDUCER putApi: ', {product});
  let _id = product._id;
  let updatedProduct;

  switch (instruction){
    case 'decrementStock':
      updatedProduct = {...product, inStock: product.inStock - 1, quantityInCart: product.quantityInCart + 1};
      break;

    case 'incrementStock':
      updatedProduct = {...product, inStock: product.inStock + 1, quantityInCart: product.quantityInCart - 1};
      break;

    default:
      break;
  }

  console.log('API REDUCER putApi: ', {updatedProduct});
  return superagent.put(`https://simonpanek-auth-api.herokuapp.com/api/v1/store/${_id}`)
    .send(updatedProduct)
    .then(response => {
      console.log('API REDUCER putApi: response.body ', response.body);
      // dispatch(getAction(response.body))
    })
}

export const getAction = payload => {
  return {
    type: 'GET', 
    payload: payload
  }
}

export const deleteAction = payload => {
  return {
    type: 'DELETE',
    payload: payload
  }
}
export const postAction = payload => {
  return {
    type: 'POST', 
    payload: payload
  }
}

export const putAction = payload => {
  return {
    type: 'PUT',
    payload: payload
  }
}

//reducer

const apiSwitchboard = (state=initialState, action) => {
  let { type, payload } = action;
  switch(type) {
    case 'GET':
      console.log('API REDUCER apiSwitchboard: ', {payload});
      return {...state, results: payload};
    case 'POST':
      //adding to the database should not be allowed
      return payload;
    case 'PUT':
      //returning the updated version of the specific record is not particularly useful, instead it should be followed with another GET all call that updates local state to match the DB
      return payload;
    case 'DELETE':
      //deleting from the database should not be allowed
      return payload;
    default:
      return state;
  }
}

export default apiSwitchboard;