import Header from './component/header.js';
import Footer from './component/footer.js';
import Categories from './component/categories.js';
import SimpleCart from './component/simpleCart.js';

function App() {
  return (
    <div className="App">
      <Header />
      <SimpleCart />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
