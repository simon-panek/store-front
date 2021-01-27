let initialState = {
  categories: [
    { name: 'tools', displayName: 'Tools' },
    { name: 'materials', displayName: 'Materials' },
    { name: 'safetyGear', displayName: 'Personal Protective Equipment' },
  ],
  products: [
    { name: 'Sledge Hammer', category: 'tools', price: 39.00, inStock: 15, description: 'Good for smashing.', image: 'https://images-na.ssl-images-amazon.com/images/I/61iqnRsLgdL._AC_SL1352_.jpg' },
    { name: 'Chop Saw', category: 'tools', price: 499.00, inStock: 3, description: 'Good for cutting.', image: 'https://cdn.makitatools.com/apps/cms/img/ls1/1242566b-9bad-41d4-be5d-45d5dd71e6ae_ls1019l_p_1500px.png'},
    { name: 'Tape Measure', category: 'tools', price: 9.00, inStock: 25, description: 'Good for measuring.', image: 'https://www.zoro.com/static/cms/product/prev/Z-s-rxkcpEx_.JPG'},
    { name: 'Socket Set', category: 'tools', price: 42.00, inStock: 10, description: 'Good for tightening bolts.', image: 'https://images-na.ssl-images-amazon.com/images/I/71mlcw5eqYL._AC_SL1000_.jpg'},
    { name: 'Plywood', category: 'materials', price: 24.00, inStock: 300, description: 'Good for walls.', image: 'https://images.homedepot-static.com/productImages/6b5c9722-fc3c-4b26-ad5e-dcae58c1ad68/svn/dimensions-project-panels-225487-64_145.jpg'},
    { name: 'Cement', category: 'materials', price: 3.99, inStock: 212, description: 'Good for foundations.', image: 'https://mobileimages.lowes.com/product/converted/039645/039645110263.jpg?size=pdhi' },
    { name: 'Screws', category: 'materials', price: 0.39, inStock: 9000, description: 'Good for connecting.', image: 'https://mobileimages.lowes.com/product/converted/764666/764666692169.jpg?size=lg' },
    { name: 'Hard Hat', category: 'safetyGear', price: 15.00, inStock: 20, description: 'Good for head.', image: 'https://mobileimages.lowes.com/product/converted/078371/078371912956.jpg?size=pdhi'},
    { name: 'N-95 Mask', category: 'safetyGear', price: 5.00, inStock: 2000, description: 'Good for lungs.', image: 'https://oshareview.com/wp-content/uploads/2020/05/N95-Mask-1-474x380.jpeg'},
    { name: 'Gloves', category: 'safetyGear', price: 11.39, inStock: 84, description: 'Good for hands.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhGDTf5OOb4Xicqs122O5y5zWDpMcHBftlhtesGIZ6X7I-cZzM5uIZ2LBor0sz-bI1q2_CgEcv&usqp=CAc'},
    { name: 'Harness', category: 'safetyGear', price: 130.00, inStock: 8, description: 'Good for repelling gravity.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDZPfXqn6l2NjMApudsTRh4puUgKMcMJDhLQZQ-9nFXzFGqPLbCwi29qK5CaxE-CSjuGdngUVp&usqp=CAc'},
  ],
  activeCategory: ''
};

export const selectCategory = (category) => {
  return {
    type: 'SELECTCATEGORY',
    payload: category
  }
}

export const incrementStock = (product) => {
  return {
    type: 'INCREMENTSTOCK',
    payload: product
  }
}

export const decrementStock = (product) => {
  return {
    type: 'DECREMENTSTOCK',
    payload: product
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}


const categoryReducer = (state=initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'SELECTCATEGORY':
    
      console.log('CATEGORY REDUCER initial state ', initialState);
      
      return {...state, activeCategory: payload};

      case 'INCREMENTSTOCK':
        //TODO: increment stock
        return state; //need to update

      case 'DECREMENTSTOCK':
        //TODO: decrement stock
        // state.products.map(product=> {
        //   // let currentStock;
        //   if(payload.name === product.name){
        //     let newStock = product.inStock + 1;
        //     return {...state, product.inStock: }; 
        //   }
        //   return currentStock;
        // })
        // let newStock = currentStock ++;
        return state ; //need to update
      
      case 'RESET':
        return initialState;
        
        default:
          return state;
          
        }

}

export default categoryReducer;