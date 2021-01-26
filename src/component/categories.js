import React from 'react';
import Products from './products.js';

function Categories (props) {



  const showTools = () => {
    console.log('show tools');
  }
  
  const showMaterials = () => {
    console.log('show materials');
  }


  return (

    <div>
      <section id='categories'>
        <h2>Product Categories</h2>
        <button id='tools' onClick={showTools}>Tools</button>
        <button id='materials' onClick={showMaterials}>Materials</button>
      </section>
      <section id="products">
        <Products />
      </section>
    </div>
  )
}

export default Categories;