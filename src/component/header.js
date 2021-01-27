import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';

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
  
  return (
    <div id='header'>
      <AppBar position="static" color='gray'>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Binary Brick and Mortar
          </Typography>
          <Button color="inherit">Cart ({props.cartCount})</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const mapStateToProps = state => ({
  state,
  cartCount: state.cart.cartCount
})

export default connect(mapStateToProps)(Header);