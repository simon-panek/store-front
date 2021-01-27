import Header from './component/header.js';
import Footer from './component/footer.js';
import Categories from './component/categories.js';
import SimpleCart from './component/simpleCart.js';
import CartPage from './component/cartPage.js';
import  { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/">
        <SimpleCart />
        <Categories />
      </Route>
      <Route exact path="/store">
        <CartPage />
      </Route>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
