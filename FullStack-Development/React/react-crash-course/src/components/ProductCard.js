import styles from './ProductCard.module.css';
import { useState } from 'react';

export function ProductCard({ product, background = "slategray", isFavorites, onPurchase, onFavorites }) {

  const [stockCount, setStockCount] = useState(product.stockCount);
  const [showMore, setShowMore] = useState(false);

  function handleClick() {
    setStockCount((prevStockCount) => prevStockCount - 1);
    onPurchase(product);
  }

  function handleTwoClicks() {
    setStockCount((prevStockCount) => prevStockCount - 2);
    onPurchase(product);
  }

  return (
    <article className={styles.Container} style={{ background }}>
      <button className={styles.Favorite} onClick={() => onFavorites(product.id)}>{isFavorites ? "❤️" : "🤍"}</button>
      <h2>{product.title}</h2>
      <img
        src={product.imageSrc}
        alt="iPhone 15 Pro"
        height={128}
        width={128}
      />
      <p>Specifications:
        <button onClick={() => setShowMore(!showMore)}>{showMore ? "hide" : "show"}</button>
      </p>
      {showMore && <ul className={styles.Specifications}>
        {product.specifications.map((spec, index) => (<li key={index}>{spec}</li>))}
      </ul>}
      <Status stockCount={stockCount} />
      {stockCount > 0 && (
        <>
          <p>Price: $${product.price}</p>
          <button onClick={handleClick}>Buy</button>
        </>
      )}
      {stockCount > 1 && (
        <button onClick={handleTwoClicks}>Buy 2</button>
      )}
    </article>
  );
}

function Status({ stockCount }) {
  const NotAvailableTemplate = <p>Not available</p>;
  const AvailableTemplate = <p>{stockCount} items availale</p>;
  return stockCount === 0 ? NotAvailableTemplate : AvailableTemplate;
}