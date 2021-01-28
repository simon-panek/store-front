import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getApi } from '../store/api-reducer.js';
import { updateProducts } from '../store/categories-reducer.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header(props) {

  const classes = useStyles();

  // console.log('HEADER - state ', props.state);

  useEffect (() => {
    props.getApi();
    console.log('HEADER useEffect: props.state', props.state);
  },[])

  useEffect (() => {
    console.log('HEADER useEffect: props.apiProducts', props.apiProducts);
    props.updateProducts(props.apiProducts);
  },[props.apiProducts])
  
  return (
    <div id='header'>
      <AppBar position="static" color='gray'>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">
              Binary Brick and Mortar
            </Link>
          </Typography>
          <Button color="inherit">
            <Link to="/store">Cart ({props.cartCount})</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const mapDispatchToProps = { getApi, updateProducts };
const mapStateToProps = state => ({
  state,
  cartCount: state.cart.cartCount,
  apiProducts: state.api.results,
  // products: state.categories.products
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);