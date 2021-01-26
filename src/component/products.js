import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { selectCategory, reset } from '../store/categories-reducer.js';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const mapDispatchToProps = { selectCategory, reset };

function Products (props) {

  
    console.log('PROPS on Products Page: ', 'Active Category: ',props.activeCategory, 'Products: ', props.products);
 

  const classes = useStyles();

  return (

    <div id="productDetail">
      <section>
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
           
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Add to Cart
          </Button>
          <Button size="small" color="primary">
            Impulse Buy!
          </Button>
        </CardActions>
        </Card>
      </section>
    </div>
  )
}

const mapStateToProps = state => ({
  state,
  activeCategory: state.categories.activeCategory,
  products: state.categories.products
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);

 // image="/static/images/cards/contemplative-reptile.jpg"