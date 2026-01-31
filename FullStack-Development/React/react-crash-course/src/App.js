import { Fragment } from 'react';
import { ProductList } from './components/ProductList';
import { ProductCard } from './components/ProductCard';
import './App.css';

const styles = {
  ListDivider: {
    borderColor: "slategray"
  }
}
     
function App() {
  const products = [
    {
      imageSrc: "images/iphone.png",
      title: "iPhone 15 Pro",
      specifications: [
        "A17 Pro chip with 6-core GPU",
        "3x or 5x Telephoto camera",
        "Up to 29 hours video playback",
      ],
      stockCount: 10,
      price: 999,
    },
    {
      imageSrc: "images/airpods.png",
      title: "Airpords Pro 2",
      specifications: [
        "Noise cancellation",
        "Dust, sweat and water resistant",
        "Up to 6 hours listening time",
      ],
      stockCount: 0,
      price: 249,
    },
    {
      imageSrc: "images/apple-watch.png",
      title: "Apple Watch Series 9",
      specifications: [
        "45mm or 41mm case size",
        "Always-On Retina display",
        "Up to 18 hours normal use",
      ],
      stockCount: 6,
      price: 399,
    }
  ];

  function handlePurchase(product) {
    alert(`You have bought the ${product.title} for $${product.price}!`);
  }

  return (
    <div className="App">
      <ProductList>
        {products.map((product) => (
          <ProductCard
            key={product.title}
            product={product}
            onPurchase={handlePurchase}
          />
    ))}
      </ProductList>

      <h2>Produts which doesn't cost up to $500</h2>
      
      {products.filter(({ price }) => price < 500).map(({ title, price }) => (
        <Fragment key={title}>
          <hr style={styles.ListDivider}/>
          <p>
            {title} - ${price}
          </p> 
        </Fragment>
        ))}
      
    </div>
  );
}

export default App;