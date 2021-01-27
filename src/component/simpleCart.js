import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { removeItem, clearCart } from '../store/cart-reducer';

const mapDispatchToProps = { removeItem, clearCart };

function SimpleCart (props) {
  
  return (
    <section id='simpleCart'>
      <p>Proof of SimpleCart's Life</p>
    </section>
  )
}

const mapStateToProps = state => ({
  state,
  products: state.cart,
  count: state.cartCount,
})

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);