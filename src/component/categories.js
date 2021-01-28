import Products from './products.js';
import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { selectCategory, reset } from '../store/categories-reducer.js';
import { Typography } from '@material-ui/core';

const mapDispatchToProps = { selectCategory, reset };

function Categories (props) {

  const showCategory = (category) => {
    console.log('show category: ', category);
    props.selectCategory(category)
  }

  const reset = () => {
    props.reset();
  }

  console.log('CATEGORIES Active: ', props.active, 'Categories: ', props.categories);

  useEffect (()=> {
    console.log('CATEGORIES useEffect: props.state.categories.products ', props.state);
  })


  return (

    <div>
      <section id='categories'>
        <Typography variant='h5'>Browse Our Categories</Typography>
        <Typography variant='h7' id='tools' onClick={reset}>Home</Typography>
        { (props.active === 'tools' || props.active === '') ? 
        <div>
        <Typography variant='h7' id='tools' onClick={()=>showCategory('tools')}>Tools</Typography> 
        </div> : ''
        }
        { (props.active === 'materials' || props.active === '') ? 
        <div>
        <Typography variant='h7' id='materials' onClick={()=>showCategory('materials')}>Materials</Typography> </div> : ''
        }
        { (props.active === 'safetyGear' || props.active === '') ? 
        <Typography variant='h7' id='safetyGear' onClick={()=>showCategory('safetyGear')}>Personal Protective Equipment</Typography>: ''
        }
      </section>
      <section id="products">
        <Products />
      </section>
    </div>
  )
}

const mapStateToProps = state => ({
  categories: state.categories.categories, 
  active: state.categories.activeCategory
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories);