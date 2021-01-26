import Products from './products.js';
import React from 'react';
import { connect } from 'react-redux';
import { selectCategory, reset } from '../store/categories-reducer.js';

const mapDispatchToProps = { selectCategory, reset };

function Categories (props) {

  const showCategory = (category) => {
    console.log('show category: ', category);
    props.selectCategory(category)
  }

  const reset = () => {
    props.reset();
  }


  return (

    <div>
      <section id='categories'>
        <h2>Product Categories</h2>
        <button id='tools' onClick={reset}>Home</button>
        <button id='tools' onClick={()=>showCategory('tools')}>Tools</button>
        <button id='materials' onClick={()=>showCategory('materials')}>Materials</button>
        <button id='safetyGear' onClick={()=>showCategory('safetyGear')}>Personal Protective Equipment</button>
      </section>
      <section id="products">
        <Products />
      </section>
    </div>
  )
}

const mapStateToProps = state => ({
  category: state.categories, 
  active: state.active
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories);