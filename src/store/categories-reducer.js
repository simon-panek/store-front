import { ContactSupportOutlined } from "@material-ui/icons";

let initialState = {
  categories: [
    { name: 'tools', displayName: 'Tools' },
    { name: 'materials', displayName: 'Materials' },
    { name: 'safetyGear', displayName: 'Personal Protective Equipment' },
  ],
  products: [
    // { _id: '', name: 'Sledge Hammer', category: 'tools', price: 39.00, inStock: 15, description: 'Good for smashing.', image: 'https://images-na.ssl-images-amazon.com/images/I/61iqnRsLgdL._AC_SL1352_.jpg', quantityInCart:0 },
    // { _id: '', name: 'Chop Saw', category: 'tools', price: 499.00, inStock: 3, description: 'Good for cutting.', image: 'https://cdn.makitatools.com/apps/cms/img/ls1/1242566b-9bad-41d4-be5d-45d5dd71e6ae_ls1019l_p_1500px.png', quantityInCart:0},
    // { _id: '', name: 'Tape Measure', category: 'tools', price: 9.00, inStock: 25, description: 'Good for measuring.', image: 'https://www.zoro.com/static/cms/product/prev/Z-s-rxkcpEx_.JPG', quantityInCart:0},
    // { _id: '', name: 'Socket Set', category: 'tools', price: 42.00, inStock: 10, description: 'Good for tightening bolts.', image: 'https://images-na.ssl-images-amazon.com/images/I/71mlcw5eqYL._AC_SL1000_.jpg', quantityInCart:0},
    // { _id: '', name: 'Plywood', category: 'materials', price: 24.00, inStock: 300, description: 'Good for walls.', image: 'https://images.homedepot-static.com/productImages/6b5c9722-fc3c-4b26-ad5e-dcae58c1ad68/svn/dimensions-project-panels-225487-64_145.jpg', quantityInCart:0},
    // { _id: '', name: 'Cement', category: 'materials', price: 3.99, inStock: 212, description: 'Good for foundations.', image: 'https://mobileimages.lowes.com/product/converted/039645/039645110263.jpg?size=pdhi', quantityInCart:0 },
    // { _id: '', name: 'Screws', category: 'materials', price: 0.39, inStock: 9000, description: 'Good for connecting.', image: 'https://mobileimages.lowes.com/product/converted/764666/764666692169.jpg?size=lg', quantityInCart:0 },
    // { _id: '', name: 'Hard Hat', category: 'safetyGear', price: 15.00, inStock: 20, description: 'Good for head.', image: 'https://mobileimages.lowes.com/product/converted/078371/078371912956.jpg?size=pdhi', quantityInCart:0},
    // { _id: '', name: 'N-95 Mask', category: 'safetyGear', price: 5.00, inStock: 2000, description: 'Good for lungs.', image: 'https://oshareview.com/wp-content/uploads/2020/05/N95-Mask-1-474x380.jpeg', quantityInCart:0},
    // { _id: '', name: 'Gloves', category: 'safetyGear', price: 11.39, inStock: 84, description: 'Good for hands.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhGDTf5OOb4Xicqs122O5y5zWDpMcHBftlhtesGIZ6X7I-cZzM5uIZ2LBor0sz-bI1q2_CgEcv&usqp=CAc', quantityInCart:0},
    // { _id: '', name: 'Harness', category: 'safetyGear', price: 130.00, inStock: 8, description: 'Good for repelling gravity.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDZPfXqn6l2NjMApudsTRh4puUgKMcMJDhLQZQ-9nFXzFGqPLbCwi29qK5CaxE-CSjuGdngUVp&usqp=CAc', quantityInCart:0},
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
  // console.log('CATEGORY REDUCER incrementStock ', product);
  return {
    type: 'INCREMENTSTOCK',
    payload: product
  }
}

export const decrementStock = (product) => {
  // console.log('CATEGORY REDUCER decrementStock ', product);
  return {
    type: 'DECREMENTSTOCK',
    payload: product
  }
}

export const updateProducts = (products) => {
  console.log('CATEGORY REDUCER updateProducts: ', {products});
  return {
    type: 'UPDATE-PRODUCTS',
    payload: products
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
    
      // console.log('CATEGORY REDUCER initial state ', initialState);
      
      return {...state, activeCategory: payload};

      case 'INCREMENTSTOCK':
        //TODO: increment stock
        // console.log('CATEGORY REDUCER Switch incrementStock ', payload)

        let tempArrayPlus = state.products;
        let locationPlus;
        tempArrayPlus.map((product, idx) => {
          if(product.name === payload.name){
            locationPlus = idx;
          }
          return locationPlus;
        })

        // console.log({locationPlus});
        // console.log('tempArrayPlus before update: ', tempArrayPlus);
        
        tempArrayPlus[locationPlus].inStock = tempArrayPlus[locationPlus].inStock + 1;

        // console.log('tempArrayPlus after update: ', tempArrayPlus);

        return {...state, products: tempArrayPlus};

      case 'DECREMENTSTOCK':
        // console.log('CATEGORY REDUCER Switch decrementStock ', payload)
        let tempArray = state.products;
        let location;
        tempArray.map((product, idx) => {
          if(product.name === payload.name){
            location = idx;
          }
          return location;
        })

        // console.log({location});
        // console.log('tempArray before update: ', tempArray);
        
        tempArray[location].inStock = tempArray[location].inStock - 1;

        // console.log('tempArray after update: ', tempArray);

        return {...state, products: tempArray};
      
      case 'RESET':
        return initialState;
      
      case 'UPDATE-PRODUCTS':
        console.log('CATEGORY REDUCER categoryReducer: ', {payload});
        return {...state, products: payload};
        
        default:
          return state;
          
        }

}

export default categoryReducer;