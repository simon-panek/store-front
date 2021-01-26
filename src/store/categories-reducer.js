let initialState = {
  categories: [
    { name: 'tools', displayName: 'Tools' },
    { name: 'materials', displayName: 'Materials' },
    { name: 'safetyGear', displayName: 'Personal Protective Equipment' },
  ],
  products: [
    { name: 'Sledge Hammer', category: 'tools', price: 39.00, inStock: 15, description: 'Good for smashing.' },
    { name: 'Chop Saw', category: 'tools', price: 499.00, inStock: 3, description: 'Good for cutting.' },
    { name: 'Tape Measure', category: 'tools', price: 9.00, inStock: 25, description: 'Good for measuring.' },
    { name: 'Socket Set', category: 'tools', price: 42.00, inStock: 10, description: 'Good for tightening bolts.' },
    { name: 'Plywood', category: 'materials', price: 24.00, inStock: 300, description: 'Good for walls.' },
    { name: 'Cement', category: 'materials', price: 3.99, inStock: 212, description: 'Good for foundations.' },
    { name: 'Screws', category: 'materials', price: 0.39, inStock: 9000, description: 'Good for connecting.' },
    { name: 'Hard Hat', category: 'safetyGear', price: 15.00, inStock: 20, description: 'Good for head.' },
    { name: 'N-95 Mask', category: 'safetyGear', price: 5.00, inStock: 2000, description: 'Good for lungs.' },
    { name: 'Gloves', category: 'safetyGear', price: 11.39, inStock: 84, description: 'Good for hands.' },
    { name: 'Harness', category: 'safetyGear', price: 130.00, inStock: 8, description: 'Good for repelling gravity.' },
  ],
  activeCategory: ''
};

export const selectCategory = (category) => {
  return {
    type: 'SELECTCATEGORY',
    payload: category
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
      
      case 'RESET':
        return initialState;
        
        default:
          return state;
          
        }

}

export default categoryReducer;