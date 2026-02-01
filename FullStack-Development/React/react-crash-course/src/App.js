import { useState } from 'react';
import { Fragment } from 'react';
import { ProductList } from './components/ProductList';
import { ProductCard } from './components/ProductCard';
import { ProductFilter } from './components/ProductFilter';
import './App.css';


     
function App() {
  const products = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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

  const [filters, setFilters] = useState({
    price: {
      min: 0,
      max: 999
    },
    other: "other values"
  });

  const [favorites, setFavorites] = useState([]);

  function handlePurchase(product) {
    alert(`You have bought the ${product.title} for $${product.price}!`);
  }

  function handleClick(key, value) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      price: {
        ...prevFilters.price,
        [key]: value,
      },
    }));
  }

  function handleFavorites(productId) {
    if (favorites.includes(productId)) {
      setFavorites((prevFavorites) => prevFavorites.filter(id => id !== productId));
    } else {
      setFavorites((prevFavorites) => [...prevFavorites, productId])
    }
  }

  return (
    <div className="App">
      <ProductList>
        {products.map((product) => (
          <ProductCard
            key={product.title}
            product={product}
            isFavorites={favorites.includes(product.id)}
            onPurchase={handlePurchase}
            onFavorites={handleFavorites}
          />
    ))}
      </ProductList>

      <h2>Products filtered by price</h2>
      <ProductFilter filters={filters} onFilter={handleClick} />
      
      {products.filter(({ price }) => price >= filters.price.min && price <= filters.price.max).map(({ title, price }) => (
        <Fragment key={title}>
          <hr className='ListDivider'/>
          <p>
            {title} - ${price}
          </p> 
        </Fragment>
        ))}
      
    </div>
  );
}

export default App;